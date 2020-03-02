import React, { useState, useEffect } from "react";
import growl, { GrowlComponent } from '@crystallize/react-growl';

import axios from "axios";

const Listing = () => {
  const url = window.location.origin;
  const [listing, setListing] = useState([]);
  const [sortBy, setSortBy] = useState('');
  let isDeleting = false;

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

  const handleDelete = (id) => {
    isDeleting = true;
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
  }

  const handleUpdate = (id, type) => {
    if (!isDeleting) {
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
          <button key={'listing-' + idx} onClick={() => handleUpdate(item.id, item.type)} className={item.type + "-item"}>
            <h4>{item.name ? item.name : 'New ' + item.type}</h4>
            {item.caption &&
              <p>{item.caption}</p>
            }
            <span className="button" onClick={() => handleDelete(item.id)} tabIndex="0">Delete</span>
          </button>
        )
      })}
    </div>
  )
}

export default Listing