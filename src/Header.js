import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className='header'>
            <img 
                className="header__logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
            />

            <div
            className="header__search">
                <input
                className="header__searchInput"
                type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOn
                    e">Hello Guest,</span>
                    <span className="header__optionLineTw
                    o">Sign In</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOn
                    e">Returns</span>
                    <span className="header__optionLineTw
                    o">& Orders</span>
                </div>

                <div className="header__option">
                <span className="header__optionLineOn
                    e">Your</span>
                    <span className="header__optionLineTw
                    o">Prime</span>
                </div>

                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLineTwo header__basketCount">0</span>
                </div>        
            </div>

        </div>
    )
}

export default Header
