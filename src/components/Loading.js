import '../css/Loading.css';

export default function Loading() {
  console.log('~ Loading');

  return (
    <div className='vh-100 d-flex align-items-center justify-content-center'>
      <div className='spinner'>
        <div className='double-bounce1'></div>
        <div className='double-bounce2'></div>
      </div>
    </div>
  );
}
