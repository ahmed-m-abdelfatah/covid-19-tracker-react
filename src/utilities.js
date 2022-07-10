export const numberWithCommas = x => {
  if (x === undefined) return 0;
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') ?? 0;
};

export const israelToPalestine = x =>
  x === 'Israel' ? (
    <>
      <span className='text-decoration-line-through'>{x}</span> <span>Palestine</span>
    </>
  ) : (
    x
  );

export const randomColor = () => '#' + ((Math.random() * 0xffffff) << 0).toString(16);
// style={{background: randomColor()}}
