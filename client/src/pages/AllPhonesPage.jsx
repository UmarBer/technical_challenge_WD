import { useEffect, useState } from 'react';
import { listOfPhones } from '../services/phones';
import { Link } from 'react-router-dom';

function AllPhonesPage() {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    listOfPhones().then((data) => {
      console.log(data);
      setPhones(data.phones);
    });
  }, []);

  return (
    <div>
      <h1>Here is a list of all the phones</h1>
      {phones &&
        phones.map((singlePhone) => {
          return (
            <Link key={singlePhone.name} to={`/phones/${singlePhone.id}`}>
              <h2>{singlePhone.name}</h2>
            </Link>
          );
        })}
    </div>
  );
}

export default AllPhonesPage;
