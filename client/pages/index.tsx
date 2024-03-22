import React, {useEffect, useState} from 'react'

interface transactionData {
  amount: number;
  asset_description: string;
  cap_gains_over_200_usd: boolean;
  disclosure_date: string;
  disclosure_year: string;
  district: string;
  industry: string;
  owner: string;
  party: string;
  ptr_link: string;
  representative: string;
  sector: string;
  state: string;
  ticker: string;
  transaction_date: string;
  type: string;
}

function index() {

  const [data, setData] = useState<transactionData[]>([]);
  useEffect(() => {
    fetch("http://localhost:8080/api")
    .then((response) => response.json())
    .then((data : transactionData[]) => {
      setData(data);
    });
  },[]);
  return(
    <div>
      <h1>House Stock Watcher</h1>
      <div>
        {data.map((item, index) => (
          <div key={index}>
            <p>Representative: {item.representative}</p>
            <p>Asset: {item.asset_description}</p>
            <p>Transaction Date: {item.transaction_date}</p>
            <p>Amount: {item.amount}</p>
            <hr></hr>
          </div>
        ))}
      </div>
    </div>
  );
}

export default index