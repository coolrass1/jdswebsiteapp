export const onSubmitFetch = (data) => {
    // Used to Abort a long running fetch.
    const abortLongFetch = new AbortController();
    // Abort after 7 seconds.
    const abortTimeoutId = setTimeout(() => abortLongFetch.abort(), 7000);

    // Don't want to actually submit the form
   // e.preventDefault();

    // Loading
    //setStatus(contactStatuses.loading);

    // You can change this fetch URL to a bad url to see the .catch() block hit
    // Example: '/api/contact-bad'
    fetch('/api/mailer', {
      signal: abortLongFetch.signal,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((res) => {
        if (res.ok) {
          // If we got an 'ok' response from fetch, clear the AbortController timeout
          clearTimeout(abortTimeoutId);
          return res.json();
        }
        // If the response was anything besides 'ok', throw an error to hit our .catch() block
        throw new Error('Whoops! Error sending email.');
      })
      .then((res) => {
        // On a successful search, set the status to 'submitted' and reset the fields
        //setStatus(contactStatuses.submitted);
       // reset();
      })
      .catch((err) => {
        // There was an error, catch it and set the status to 'error'
       // setStatus(contactStatuses.error);
      });
  };