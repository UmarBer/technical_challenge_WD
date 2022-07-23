import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadSinglePhone } from '../services/phones';

function SinglePhonePage() {
  const [phone, setPhone] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    loadSinglePhone(id).then((data) => {
      console.log(data);
      setPhone(data);
    });
  });
  return (
    <div>
      {phone && (
        <>
          <h1>{phone.name}</h1>
          <ul>
            <li>{phone.manufacturer}</li>
            <li>{phone.color}</li>
            <li>{phone.price}</li>
          </ul>
          <p>{phone.description}</p>
        </>
      )}
    </div>
  );
}

export default SinglePhonePage;
