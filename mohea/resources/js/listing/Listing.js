import React, { useState, useEffect } from "react";
import growl, { GrowlComponent } from '@crystallize/react-growl';

import axios from "axios";

const Listing = () => {
  const url = window.location.origin;
  const [listing, setListing] = useState([]);
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    axios({
      method: 'GET',
      url: url + '/project/',
    })
      .then(res => {
        if (res.status === 200) {
          setListing(res.data)
        }
      })

  }, [])

  const handleDelete = (id) => {
    axios({
      method: 'DELETE',
      url: url + '/project/' + id,
    })
      .then(res => {
        if (res.status === 200) {
          setListing(res.data)
          growl({
            type: 'success',
            message: <b>Deleted with success</b>
          })
        }
      })
  }

  const handleUpdate = (id, type) => {
    window.location.replace(url + '/project/' + type + '/' + id);
    return;
  }

  return (
    <div>
      <GrowlComponent />
      <div className="filter">
        <a className="link" onClick={() => setSortBy('')} tabIndex="0">All projects</a>
        <a className="link" onClick={() => setSortBy('table')} tabIndex="0">Tables</a>
        <a className="link" onClick={() => setSortBy('form')} tabIndex="0">Forms</a>
        <a className="link" onClick={() => setSortBy('menu')} tabIndex="0">Menus</a>
      </div>
      {listing.map((item, idx) => {

        if (sortBy && item.type !== sortBy) {
          return;
        }

        return (
          <div key={'listing-' + idx} className="d-flex">
            <h4>{item.name ? item.name : 'New ' + item.type}</h4>
            {item.caption &&
              <p>{item.caption}</p>
            }
            <span>{item.type}</span>
            <input type="button" onClick={() => handleDelete(item.id)} value="Delete" />
            <input type="button" onClick={() => handleUpdate(item.id, item.type)} value="Update" />
          </div>
        )
      })}
    </div>
  )
}

export default Listing