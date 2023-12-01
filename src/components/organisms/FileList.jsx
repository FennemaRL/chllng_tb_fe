import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import environment from '../../enviroments/environment';

const FileList = () => {
  const [fetchedFiles,setFetchedFiles] = useState([]);
  
  useEffect(()=>{
    fetch(`${environment.url}/files/data`,
           {headers:new Headers({'content-type': 'application/json'})}  
         )
          .then(response=>response.json())
          .then(data=> setFetchedFiles(data || []));
  },[]);

  return (
    <div>
      <Table responsive="sm" style={{borderRadius:'2px'}} border='1px' striped bordered>
        <thead style={{borderBottom:'2px solid'}}>
          <tr >
            <th>File Name</th>
            <th>Text</th>
            <th>Number</th>
            <th style={{width:"50%"}}>hex</th>
          </tr>
        </thead>
        <tbody>
        {fetchedFiles.map(file=>{
          return file.lines.map(line => (
            <tr key={line.hex}>
              <td>{file.file}</td>
              <td>{line.text}</td>
              <td>{line.number}</td>
              <td>{line.hex}</td>
            </tr>
          ))
        }
        )}
        </tbody>
      </Table>
    </div>
  );
};

export default FileList;