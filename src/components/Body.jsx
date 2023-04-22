import '../assets/css/body.css'

const Body = () =>{
    return(
        <div className="body">
            <div className="body_info" data-aos="fade-up">
                <h2>Por un Mexico en donde todos prosperen</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, assumenda suscipit. Non inventore quas harum eos possimus ea a officia porro dicta adipisci accusamus reprehenderit corrupti cum, et blanditiis aut!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est eligendi illum ut eaque reiciendis! Magni nihil a hic natus deserunt quaerat optio iusto, debitis error voluptatem eligendi similique eos rerum.
                </p>
                <button>Afiliate Ahora</button>
            </div>
            <div className="body_img" data-aos="fade-up">
                <img src="../src/assets/img/body.jpg" alt="" />
            </div>
        </div>
    )
}

export default Body;