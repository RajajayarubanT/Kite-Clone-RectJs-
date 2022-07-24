

const WatchList = () => {
  return (
    <div className="WatchList-main-container">
        <div className="WatchList-search-container">
            <span className="watch_search_icon icon icon-search"></span>
            <input type="text"  placeholder="Search eg: infy bse, nifty fut, nifty weekly, gold mcx"/>
            <span className="watchlist-count">2 / 50</span>
        </div>
        <div className="WatchList-added-items">
            <div className="WatchList-added-item" draggable="true">
                <div className="WL-item-symbol">
                    <div className="WL-item-symbol-name price-down">NIFTY 50</div>
                    <div className="WL-item-symbol-type">INDEX</div>
                </div>
                <div className="WL-item-price">
                    <span className="WL-item-price-percMove">-0.26 %</span>
                    <span className="WL-item-price-arrow arrow-down icon icon-chevron-down"></span>
                    <span className="WL-item-price-value price-down">16584.30</span>
                </div>
            </div>
            <div className="WatchList-added-item" draggable="true">
                <div className="WL-item-symbol">
                    <div className="WL-item-symbol-name price-down">NIFTY BANK</div>
                    <div className="WL-item-symbol-type">INDEX</div>
                </div>
                <div className="WL-item-price">
                    <span className="WL-item-price-percMove">-0.95 %</span>
                    <span className="WL-item-price-arrow arrow-down icon icon-chevron-down"></span>
                    <span className="WL-item-price-value price-down">35275.05</span>
                </div>
            </div>
        </div>
        <div className="WatchList-list-container">
            <div className="WatchList-list-items">
                <span className="WatchList-list-item" id="WatchList-list-1" data-balloon="1" data-balloon-pos="up" >1</span>
                <span className="WatchList-list-item" id="WatchList-list-2" data-balloon="2" data-balloon-pos="up" >2</span>
                <span className="WatchList-list-item" id="WatchList-list-3" data-balloon="3" data-balloon-pos="up" >3</span>
                <span className="WatchList-list-item" id="WatchList-list-4" data-balloon="4" data-balloon-pos="up" >4</span>
                <span className="WatchList-list-item" id="WatchList-list-5" data-balloon="5" data-balloon-pos="up" >5</span>
                <span className="WatchList-list-item" id="WatchList-list-6" data-balloon="6" data-balloon-pos="up" >6</span>
                <span className="WatchList-list-item" id="WatchList-list-7" data-balloon="7" data-balloon-pos="up" >7</span>
              </div>
              <div className="WatchList-list-settings" data-balloon="Marketwatch settings" data-balloon-pos="left" >
                  <span className="icon icon-settings" id="WatchList-settings"></span>
              </div>
        </div>
    </div>
  );
}


export default WatchList;

