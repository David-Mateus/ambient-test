
export default function Card(props) {
  return (
    <>  
    <div className='flex  justify-between rounded border-4 border-sky-500 bg-red-500 w-56 '>
      <strong>{props.name}</strong>
      <small>{props.time}</small>
    </div>
    </>
  );
}
