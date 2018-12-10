import dispatcher from "../dispatcher";

// 6- dispatcher.dispatch is how you send actions to the dispatcher 

export function createHeader(text) {
  dispatcher.dispatch({
    type: "CREATE_HEADER",
    text,
  });
}

export function deleteHeader(id) {
  dispatcher.dispatch({
    type: "DELETE_HEADER",
    id,
  });
}

export function reloadHeaders() {
  /* 
    https://stackoverflow.com/questions/39019094/reactjs-get-json-object-data-from-an-url
    
    axios("http://someurl.com/somedataendpoint").then((data) => {
      console.log("got the data!", data);
    })
    
    for ajax calls, you can fire off 3 actions, 
      the 1st 'FETCH_HEADERS' is to kick off the process maybe show a spinner by simply setting a specific boolean in the state
    the 2nd action RECEIVE_HEADERS is within the promise to notify that you've now received the data 
    the 3rd action can be an error if the ajax call fails
  */

  dispatcher.dispatch({type: "FETCH_HEADERS"});
  
  setTimeout(() => {
    dispatcher.dispatch({type: "RECEIVE_HEADERS", todos: [
      {
        id: 8484848484,
        text: "Go Shopping Again",
        complete: false
      },
      {
        id: 6262627272,
        text: "Hug Wife",
        complete: true
      },
    ]});

    /*
      if (false){
        dispatcher.dispatch({type: "FETCH_HEADERS_ERROR"})
      }
    */
  }, 1000);
}
