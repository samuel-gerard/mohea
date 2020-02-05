import React from "react"
import axios from "axios";
import growl from '@crystallize/react-growl';

export const SaveProject = props => {
  const url = window.location.origin;
  const href = window.location.href;
  const id = href.substring(href.lastIndexOf('/') + 1)

  const save = () => {
    if (!parseInt(id, 10)) {
      saveNew()
      return;
    }

    update();
  }

  const update = () => {
    axios({
      method: 'put',
      url: url + '/project/' + id,
      data: {
        name: props.name,
        caption: props.caption,
        content: JSON.stringify({
          classes: props.classes,
          nbCol: props.nbCol,
          content: props.content
        }),
        type: props.type
      }
    })
      .then(res => {
        if (res) {
          growl({
            type: 'success',
            message: <b>Saved with success</b>
          })
        }
      })
  }

  const saveNew = () => {
    axios({
      method: 'post',
      url: url + '/project',
      data: {
        name: props.name,
        caption: props.caption,
        content: JSON.stringify({
          classes: props.classes,
          nbCol: props.nbCol,
          content: props.content
        }),
        type: props.type
      }
    })
      .then(res => {
        if (res.data && res.data.id) {
          window.location.replace(url + '/project/' + props.type + '/' + res.data.id);
          growl({
            type: 'success',
            message: <b>Saved with success</b>
          })
        }
      })
  }

  return (
    <div>
      <input type="button" onClick={save} value={'Save this ' + props.type} />
    </div>
  )
}
