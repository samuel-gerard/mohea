import React, { useEffect } from "react";

export const Canceller = (props) => {
  let firedUndo = false
  let firedRedo = false

  useEffect(props => {
    document.addEventListener("keydown", e => { checkKeyDown(e) }, false)
    document.addEventListener('keyup', checkKeyUp, false)

    return () => {
      document.removeEventListener("keydown", e => { checkKeyDown(e) }, false)
      document.removeEventListener('keyup', checkKeyUp, false)
    }
  }, [props])

  const checkKeyDown = e => {
    if (e.keyCode == 90 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
      e.stopPropagation()
      e.preventDefault()
      firedUndo = true
      return false
    }
    
    if (e.keyCode == 89 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
      e.stopPropagation()
      e.preventDefault()
      firedRedo = true
      return false
    }
  }

  const checkKeyUp = () => {
    if (firedUndo) {
      firedUndo = false
      undo()
      return
    }
    if (firedRedo) {
      firedRedo = false
      redo()
    }
  }

  const undo = () => {
    props.undoAction()
  }

  const redo = () => {
    props.redoAction()
  }

  return (
    <div>
      <button onClick={undo}>Undo last action</button>
      <button onClick={redo}>Redo last action</button>
    </div>
  )
}
