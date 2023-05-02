import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [units, setUnits] = useState([]);

  useEffect(() => {
    if (!window.localStorage.token) {
      navigate('/');
    }
    fetch('/api/units', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUnits(data.sort((a, b) => a.id - b.id));
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (prop) => (event) => {
    let value = event.target.value;
    prop.price = value;
    let newUnits = units;
    newUnits.map((unit) => {
      if (unit.id === prop.id) {
        unit.price = Number(prop.price);
      }
    });
    setUnits(newUnits.sort((a, b) => a.id - b.id));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('UNITS: ', units);
    units.map((unit) => {
      fetch(`/api/units/${unit.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(unit),
      })
        .then((res) => res.json())
        .catch((err) => console.log(err));
    });
    window.localStorage.clear();
    navigate('/');
  };

  return (
    <View id='admin-dashboard'>
      <View className='header'>
        <Text>Update Prices</Text>
      </View>
      <View className='content'>
        <View className='units'>
          <form onSubmit={handleSubmit}>
            <View className='climate'>
              {units.map((unit) =>
                unit.climate ? (
                  <View className='unit climate' key={unit.id}>
                    <Text>
                      {unit.length} x {unit.width}{' '}
                      {unit.climate ? <span> Climate Controlled </span> : <span> Outside </span>}
                    </Text>
                    <View className='unit-price'>
                      <h4>Price</h4>
                      <input
                        type='number'
                        name={unit.id}
                        defaultValue={unit.price}
                        onChange={handleChange(unit)}
                      />
                    </View>
                  </View>
                ) : (
                  <></>
                ),
              )}
            </View>
            <View className='non-climate'>
              {units.map((unit) =>
                !unit.climate ? (
                  <View className='unit non-climate' key={unit.id}>
                    <Text>
                      {unit.length} x {unit.width}{' '}
                      {unit.climate ? <span> Climate Controlled </span> : <span> Outside </span>}
                    </Text>
                    <View className='unit-price'>
                      <h4>Price</h4>
                      <input
                        type='number'
                        name={unit.id}
                        defaultValue={unit.price}
                        onChange={handleChange(unit)}
                      />
                    </View>
                  </View>
                ) : (
                  <></>
                ),
              )}
            </View>
            <View id='submit'>
              <input type='submit' value='Update Prices' />
            </View>
          </form>
        </View>
      </View>
    </View>
  );
};

export default AdminDashboard;
