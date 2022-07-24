
import Bull from '../../images/bull.png'
import Console from '../../images/console.svg'

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Header from '../header/header';
import WatchList from '../WatchList/WatchList';

const Positions = () => {

  return (
    <div className="positions-main-container">
      <Header />
      <div className="positions-main-content">
        <div className="container-left">
          <WatchList />
        </div>
        <div className="container-right">
          <div className="position-items-container">
            <div className="position-item-positions">
              <div className="pos-position-header">
                <div className="pos-position-header-item">
                  Positions <span className='position-length' id="position-length">(2)</span> 
                </div>
                <div className="pos-position-header-item">
                  <div className="position-header-search">
                    <span className='icon icon-search'></span>
                    <input type="text" id="position-header-search" placeholder='Search'/>
                  </div>
                  <div className="position-header-icons positio-header-icon-analysis">
                    <img src={Bull} alt="" />
                    <span>Analysis</span>
                  </div>
                  <div className="position-header-icons positio-header-icon-analytics">
                    <img src={Console} alt="" />
                    <span>Analytics</span>
                  </div>
                  <div className="position-header-icons positio-header-icon-download">
                    <span className='icon icon-download'></span>
                    <span>Download</span>
                  </div>
                </div>
              </div>
              <table className='pos-position-tabel'>
                <thead>
                  <tr>
                    <th className="">
                      <span >
                        <input className='pos-position-selectAll' type="checkbox" />
                      </span>
                    </th>
                    <th className="center">
                      <span> Product </span>
                    </th>
                    <th className="instrument left">
                      <span> Instrument </span>
                    </th>
                    <th className="quantity ">
                      <span> Qty. </span>
                    </th>
                    <th className="average-price ">
                      <span> Avg. </span>
                    </th>
                    <th className="last-price  ">
                      <span> LTP </span>
                    </th>
                    <th className="pnl  ">
                      <span> P&amp;L </span>
                    </th>
                    <th className="net-change-percent ">
                      <span>chg. </span>
                    </th>
                  </tr>
                </thead>
                <tbody className="a-position-list-container">
                  <tr className='pos-position-item trade-open'>
                    <td>
                      <span>
                        <input
                          className='pos-position-select'
                          type="checkbox"
                        />
                      </span>
                    </td>
                    <td >
                      <span className="NRML">NRML</span>
                    </td>
                    <td className="instrument left">
                      <span className="trade-name-span">
                        NIFTY 5
                        <span className="trade-day-div">
                          <span className='trade-day'>
                            th <span className='trade-type'>W</span>
                          </span>
                        </span>
                        MAY 17000 PE
                        <span className="nfo"> NFO</span>
                      </span>
                    </td>
                    <td><span>1000</span></td>
                    <td><span> 51.94</span></td>
                    <td><div id="ltp">87</div></td>
                    <td id="pnl" className="text-green">+ 5,55,680.00</td>   
                    <td className="text-green day-change" id="day_change">
                      <span>
                      112.47%
                      </span>
                    </td>
                  </tr>
                  <tr className='pos-position-item trade-open'>
                    <td>
                      <span>
                        <input
                          className='pos-position-select'
                          type="checkbox"
                        />
                      </span>
                    </td>
                    <td >
                      <span className="NRML">NRML</span>
                    </td>
                    <td className="instrument left">
                      <span className="trade-name-span">
                        NIFTY 5
                        <span className="trade-day-div">
                          <span className='trade-day'>
                            th <span className='trade-type'>W</span>
                          </span>
                        </span>
                        MAY 17000 PE
                        <span className="nfo"> NFO</span>
                      </span>
                    </td>
                    <td><span>1000</span></td>
                    <td><span> 51.94</span></td>
                    <td><div id="ltp">87</div></td>
                    <td id="pnl" className="text-green">+ 5,55,680.00</td>   
                    <td className="text-green day-change" id="day_change">
                      <span>
                      112.47%
                      </span>
                    </td>
                  </tr>
                  <tr className="total_p_l_container">
                    <td></td>
                    <td></td>
                    <td className="instrument right"></td>
                    <td></td>
                    <td></td>
                    <td>Total</td>
                    <td id="pnl" className="text-green">+ 12,28,330.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="position-item-positions position-item-dayHistory">
              <div className="pos-position-header">
                <div className="pos-position-header-item">
                Days's history <span className='position-length' id="position-length">(2)</span> 
                </div>
                <div className="pos-position-header-item">
                  <div className="position-header-search">
                    <span className='icon icon-search'></span>
                    <input type="text" id="position-header-search" placeholder='Search'/>
                  </div>
                  
                  <div className="position-header-icons positio-header-icon-download">
                    <span className='icon icon-download'></span>
                    <span>Download</span>
                  </div>
                </div>
              </div>
              <table className='pos-position-tabel'>
                <thead>
                  <tr>
                    <th className="">
                      <span >
                        <input className='pos-position-selectAll' type="checkbox" />
                      </span>
                    </th>
                    <th className="center">
                      <span> Product </span>
                    </th>
                    <th className="instrument left">
                      <span> Instrument </span>
                    </th>
                    <th className="quantity ">
                      <span> Qty. </span>
                    </th>
                    <th className="average-price ">
                      <span> Avg. </span>
                    </th>
                    <th className="last-price  ">
                      <span> LTP </span>
                    </th>
                    <th className="pnl  ">
                      <span> P&amp;L </span>
                    </th>
                   
                  </tr>
                </thead>
                <tbody className="a-position-list-container">
                  <tr className='pos-position-item trade-open'>
                    <td>
                      <span>
                        <input
                          className='pos-position-select'
                          type="checkbox"
                        />
                      </span>
                    </td>
                    <td >
                      <span className="NRML">NRML</span>
                    </td>
                    <td className="instrument left">
                      <span className="trade-name-span">
                        NIFTY 5
                        <span className="trade-day-div">
                          <span className='trade-day'>
                            th <span className='trade-type'>W</span>
                          </span>
                        </span>
                        MAY 17000 PE
                        <span className="nfo"> NFO</span>
                      </span>
                    </td>
                    <td><span>1000</span></td>
                    <td><span> 51.94</span></td>
                    <td><div id="ltp">87</div></td>
                    <td id="pnl" className="text-green">+ 5,55,680.00</td>   
                  </tr>
                  <tr className='pos-position-item trade-open'>
                    <td>
                      <span>
                        <input
                          className='pos-position-select'
                          type="checkbox"
                        />
                      </span>
                    </td>
                    <td >
                      <span className="NRML">NRML</span>
                    </td>
                    <td className="instrument left">
                      <span className="trade-name-span">
                        NIFTY 5
                        <span className="trade-day-div">
                          <span className='trade-day'>
                            th <span className='trade-type'>W</span>
                          </span>
                        </span>
                        MAY 17000 PE
                        <span className="nfo"> NFO</span>
                      </span>
                    </td>
                    <td><span>1000</span></td>
                    <td><span> 51.94</span></td>
                    <td><div id="ltp">87</div></td>
                    <td id="pnl" className="text-green">+ 5,55,680.00</td>   
                    
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>    
      </div>
    </div>
  );
}


export default Positions;

