import React, { useState, useEffect } from "react";
import growl, { GrowlComponent } from '@crystallize/react-growl';

import axios from "axios";

const Listing = () => {
  const url = window.location.origin;
  const [listing, setListing] = useState([]);
  const [sortBy, setSortBy] = useState('');

  useEffect( () => {
    axios({
      method: 'GET',
      url: url + '/project/',
    })
    .then(res => {
      if(res.status === 200) {
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
      if(res.status === 200) {
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
      <h1>Listing</h1>
      <div className="d-flex">
        <input type="button" onClick={() => setSortBy('')} value="All" />
        <input type="button" onClick={() => setSortBy('menu')} value="Menu" />
        <input type="button" onClick={() => setSortBy('table')} value="Table" />
        <input type="button" onClick={() => setSortBy('form')} value="Form" />
      </div>
      {listing.map((item, idx) => {

        if(sortBy && item.type !== sortBy) {
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