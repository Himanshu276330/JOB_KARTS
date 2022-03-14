import React from 'react'

function Search() {
  return (
    <div id = "all">
        <div id="box">
        <div className="head">
            Find your perfect job today!
        </div>

        <div className="cont">

            <select name="location" id="location">
            <option value="" disabled selected hidden className='default'>Country</option>
                <option value="a" class="item2">A</option>
                <option value="b" class="item2">B</option>
                <option value="a" class="item2">C</option>
                <option value="b" class="item2">D</option>
                <option value="a" class="item2">E</option>
                <option value="b" class="item2">D</option>
            </select>

            <select name="title" id="title" placeholder='Job Title'>
            <option value="" disabled selected hidden className='default'>Job Title</option>
                <option value="a" class="item2">A</option>
                <option value="b" class="item2">B</option>
                <option value="a" class="item2">C</option>
                <option value="b" class="item2">D</option>
                <option value="a" class="item2">E</option>
                <option value="b" class="item2">D</option>
            </select>

            

            <button id="search">Search</button>
        </div>

        </div>

    </div>
  )
}

export default Search;