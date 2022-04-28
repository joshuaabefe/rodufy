import $ from 'jquery'
 function Preloader() {
    return (
        // Preloader
        <div id='preloader'>
        <div className="jumper">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div> 
        </div>
    </div> 
    );
  }

$(window).on('load', function() {
    $("#preloader").animate({
        'opacity': '0'
    }, 600, function(){
        setTimeout(function(){
            $("#preloader").css("visibility", "hidden").fadeOut();
        }, 300);
    });
});
  

  export default Preloader;