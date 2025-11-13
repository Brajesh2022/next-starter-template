export default function NoScript() {
  return (
    <noscript>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          backgroundColor: 'black',
          color: 'white',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 9999,
        }}
      >
        <div style={{ maxWidth: '80%' }}>
          <h1 style={{ fontSize: '2em', marginBottom: '1em' }}>
            JavaScript is disabled in your browser.
          </h1>
          <p style={{ fontSize: '1.2em' }}>
            To protect our website&apos;s content from being copied, we use
            JavaScript to render the page. Please enable JavaScript to continue.
          </p>
        </div>
      </div>
    </noscript>
  );
}
