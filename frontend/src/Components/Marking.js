import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Marking() {
  const [rubric, setRubric] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchRubric = async () => {
      try {
        const response = await axios.get(`http://localhost:3005/normalroutes/rubric/${id}`);
        setRubric(response.data);
      } catch (error) {
        console.error('Error fetching rubric:', error);
      }
    };

    fetchRubric();

    return () => {
      setRubric(null);
    };
  }, [id]);

  if (!rubric) {
    return <div>Loading...</div>;
  }

  // Extracting headers from the first criterion object
  const headers = Object.keys(rubric.criteria[0]);

  return (
    <div>
      <h2>{rubric.specialization}</h2>
      <table>
        <thead>
          <tr>
            {headers.map(header => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rubric.criteria.map((criterion, index) => (
            <tr key={index}>
              {headers.map(header => (
                <td key={header}>{criterion[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Marking;
