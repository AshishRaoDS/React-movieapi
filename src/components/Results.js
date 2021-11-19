
import Result from './Result'
function Results({results,openPopup}) {
    return (
       
            <div>
                <section className="results">
                {/* {results.map(result=> <div key={result.imdbID}>{result.Year} Title-{result.Title} image - <img src={result.Poster}/></div>)} */}
         {results.map(result=>(
         <Result result={result} openPopup={openPopup} />))}
            </section>
        </div>
       
    )
}




export default Results
