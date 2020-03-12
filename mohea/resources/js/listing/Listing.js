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
  let currentIdx = -1;
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
    if (currentIdx === -1) {
      currentIdx = idx;
    }
    if (currentIdx === idx) {
      isDeleting = !isDeleting;
      document.getElementById('listing-' + idx).classList.toggle("deleting");
      if (isDeleting) {
        document.getElementById('button-' + idx).innerHTML = "<i class='fas fa-ban'></i>";
        document.getElementById('button-' + idx).title = "Cancel";
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
                  message: 'Your project has been deleted'
                });
                axios({
                  method: 'GET',
                  url: url + '/project/',
                })
                  .then(res => {
                    if (res.status === 200) {
                      setListing(res.data);
                    }
                    isDeleting = false;
                    isCanceling = false;
                    currentIdx = -1;
                  })
              }
            })
        }, 4000);
      }
      else {
        clearTimeout(deleteTimeout);
        document.getElementById('button-' + idx).innerHTML = "<i class='fas fa-trash-alt'></i>";
        document.getElementById('button-' + idx).title = "Delete";
        currentIdx = -1;
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
  }

  const getItemUpdated = updatedDate => {
    let date = Date.parse(updatedDate);
    let currentTime = Date.parse(new Date()) - (3600 * 1000);

    const diff = (currentTime - date) / 1000;

    if (!diff) {
      return '';
    }

    if (diff < 60) {
      return '• A few seconds ago';
    } else if (diff < 3600) {
      const time = parseInt(diff / 60);
      const unit = time > 1 ? 'minutes' : 'minute';
      return '• ' + time + ' ' + unit + ' ago';
    } else if (diff < 3600 * 24) {
      const time = parseInt(diff / 3600)
      const unit = time > 1 ? 'hours' : 'hour';
      return '• ' + time + ' ' + unit + ' ago';
    } else {
      const time = parseInt(diff / (24 * 3600))
      const unit = time > 1 ? 'days' : 'day';
      return '• ' + time + ' ' + unit + ' ago';
    }
  }

  const handleDuplicate = (item) => {
    if (!isDeleting && !isCanceling && !isError) {
      isCanceling = true;
      axios({
        method: 'post',
        url: url + '/project',
        data: {
          name: (item.name ? item.name : 'New ' + item.type) + ' - copy',
          caption: item.caption,
          content: item.content,
          type: item.type
        }
      })
        .then(res => {
          if (res.status === 200) {
            growl({
              type: 'success',
              message: item.name + ' has been duplicated'
            });
            axios({
              method: 'GET',
              url: url + '/project/',
            })
              .then(res => {
                if (res.status === 200) {
                  setListing(res.data);
                }
                setTimeout(() => {
                  isCanceling = false;
                }, 200);
              })
          }
        })
    }
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
            <h4 className="mb-0">{item.name ? item.name : 'New ' + item.type}</h4>
            <p className="small mb-0 ml-2">{getItemUpdated(item.updated_at)}</p>
            {item.caption &&
              <p>{item.caption}</p>
            }
            <span id={'actions' + idx}>
              <span className="button icon" id={'copy-' + idx} onClick={() => handleDuplicate(item)} title="Duplicate" tabIndex="0"><i className="fas fa-clone"></i></span>
              <span className="button icon" id={'button-' + idx} onClick={() => handleDelete(item.id, idx)} title="Delete" tabIndex="0"><i className="fas fa-trash-alt"></i></span>
            </span>
          </button>
        )
      })}
    </div>
  )
}

export default Listing