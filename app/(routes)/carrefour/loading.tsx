export default function Loading() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#ffffff',
      }}
    >
      <div
        className="loading-spinner"
        style={{
          width: '50px',
          height: '50px',
          border: '4px solid #f3f3f3',
          borderTop: '4px solid #D19F3B',
          borderRadius: '50%',
        }}
      />
    </div>
  );
}

