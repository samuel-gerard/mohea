import React, { useState, useEffect } from "react";
import growl, { GrowlComponent } from '@crystallize/react-growl';

import axios from "axios";

const Listing = () => {
  const url = window.location.origin;
  const [listing, setListing] = useState([]);
  const [sortBy, setSortBy] = useState('');
  let isDeleting = false;
  let isCanceling = false;
  let isError = false;
  let currentIdx = "";
  let deleteTimeout;

  useEffect(() => {
    axios({
      method: 'GET',
      url: url + '/project/',
    })
      .then(res => {
        if (res.status === 200) {
          setListing(res.data);
        }
      })
  }, [])

  const handleDelete = (id, idx) => {
    if (currentIdx == "") {
      currentIdx = idx;
    }
    if (currentIdx === idx) {
      isDeleting = !isDeleting;
      document.getElementById('listing-' + idx).classList.toggle("deleting");
      if (isDeleting) {
        document.getElementById('button-' + idx).innerHTML = "Cancel";
        isCanceling = true;
        deleteTimeout = setTimeout(() => {
          axios({
            method: 'DELETE',
            url: url + '/project/' + id,
          })
            .then(res => {
              if (res.status === 200) {
                growl({
                  type: 'success',
                  message: <b>Your project has been deleted</b>
                });
                axios({
                  method: 'GET',
                  url: url + '/project/',
                })
                  .then(res => {
                    if (res.status === 200) {
                      setListing(res.data);
                    }
                  })
                isDeleting = false;
              }
            })
        }, 5000);
      }
      else {
        clearTimeout(deleteTimeout);
        document.getElementById('button-' + idx).innerHTML = "Delete";
        currentIdx = "";
        setTimeout(() => {
          isCanceling = false;
        }, 200);
      }
    }
    else {
      isError = true;
      growl({
        type: 'error',
        message: <b>An other project is deleting</b>
      });
      setTimeout(() => {
        isError = false;
      }, 200);
    }
  }

  const handleUpdate = (id, type) => {
    if (!isDeleting && !isCanceling && !isError) {
      window.location.href = url + '/project/' + type + '/' + id;
    }
    return;
  }

  return (
    <div>
      <GrowlComponent />
      <div id="filter" className={sortBy}>
        <a className="all-link" onClick={() => setSortBy('')} tabIndex="0">All projects</a>
        <a className="table-link" onClick={() => setSortBy('table')} tabIndex="0">Tables</a>
        <a className="form-link" onClick={() => setSortBy('form')} tabIndex="0">Forms</a>
        <a className="menu-link" onClick={() => setSortBy('menu')} tabIndex="0">Menus</a>
      </div>
      {listing.map((item, idx) => {

        if (sortBy && item.type !== sortBy) {
          return;
        }

        return (
          <button key={'listing-' + idx} id={'listing-' + idx} onClick={() => handleUpdate(item.id, item.type)} className={item.type + "-item"}>
            <h4>{item.name ? item.name : 'New ' + item.type}</h4>
            {item.caption &&
              <p>{item.caption}</p>
            }
            <span className="button" id={'button-' + idx} onClick={() => handleDelete(item.id, idx)} tabIndex="0">Delete</span>
          </button>
        )
      })}
    </div>
  )
}

export default Listing