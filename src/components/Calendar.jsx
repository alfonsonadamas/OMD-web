import { useState } from "react";
import '../assets/css/calendar.css'

const Calendar = () =>{

    const [classlist, setClasslist] = useState('false');
    const [classlist2, setClasslist2] = useState('false');
    const [classlist3, setClasslist3] = useState('false');

    const handdleToggle = () =>{
        setClasslist(!classlist)
    }
    const handdleToggle2 = () =>{
        setClasslist2(!classlist2)
    }
    const handdleToggle3 = () =>{
        setClasslist3(!classlist3)
    }

    return(
        <div  className="calendar">
            <h2>Proximos Eventos</h2>
            <div className={classlist ? 'events' : 'events active'} >
                <div className="event" onClick={handdleToggle}>
                    <div>
                        <div className="date">
                            <div className="number">
                                <p>20</p>
                            </div>
                            <div className="day">
                                <p>Mar</p>
                                <p>Nov</p>
                            </div>
                            <div className="eventName">
                                <p>Conferencia sobre el salario</p>
                            </div>
                            
                        </div>
                    </div>
                    <button>Registrarme</button>
                </div>
                <div className="location">
                    <p>23 sept 2023, 19:00</p>
                    <p>Madrid, Avenida los Rosales, 122, 28021 Madrid, España</p>
                </div>
            </div>
            <div className={classlist2 ? 'events' : 'events active'} >
                <div className="event" onClick={handdleToggle2}>
                    <div>
                        <div className="date">
                            <div className="number">
                                <p>20</p>
                            </div>
                            <div className="day">
                                <p>Mar</p>
                                <p>Nov</p>
                            </div>
                            <div className="eventName">
                                <p >Conferencia sobre el salario</p>
                            </div>
                            
                        </div>
                    </div>
                    <button>Registrarme</button>
                </div>
                <div className="location">
                    <p>23 sept 2023, 19:00</p>
                    <p>Madrid, Avenida los Rosales, 122, 28021 Madrid, España</p>
                </div>
            </div>
            <div className={classlist3 ? 'events' : 'events active'} >
                <div className="event" onClick={handdleToggle3}>
                    <div>
                        <div className="date">
                            <div className="number">
                                <p>20</p>
                            </div>
                            <div className="day">
                                <p>Mar</p>
                                <p>Nov</p>
                            </div>
                            <div className="eventName">
                                <p >Conferencia sobre el salario</p>
                            </div>
                            
                        </div>
                    </div>
                    <button>Registrarme</button>
                </div>
                <div className="location">
                    <p>23 sept 2023, 19:00</p>
                    <p>Madrid, Avenida los Rosales, 122, 28021 Madrid, España</p>
                </div>
            </div>
        </div>
    )
}


export default Calendar;