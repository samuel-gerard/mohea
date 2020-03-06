import React, { useEffect } from "react";

export const Canceller = (props) => {
  let fired = false

  useEffect(props => {
    document.addEventListener("keydown", e => { checkKeyDown(e) }, false);
    document.addEventListener('keyup', checkKeyUp, false);

    return () => {
      document.removeEventListener("keydown", e => { checkKeyDown(e) }, false);
      document.removeEventListener('keyup', checkKeyUp, false);
    }
  }, [props]);

  const checkKeyDown = e => {
    if (e.keyCode == 90 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
      e.stopPropagation()
      e.preventDefault()
      fired = true
      return false
    }
  }

  const checkKeyUp = () => {
    if (fired) {
      fired = false
      cancel()
    }
  }

  const cancel = () => {
    props.cancelAction();
  }

  return (
    <div>
      <button onClick={cancel}>Cancel last action</button>
    </div>
  )
}
