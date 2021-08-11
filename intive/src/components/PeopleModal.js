import React, { useReducer } from 'react'
import ReactDOM from 'react-dom';
import StoreReducer, { InitialStore } from '../services/StoreReducer';
import './PeopleModal.css'

const PeopleModal = ({ isOpen, toggle, peopleDetail }) => isOpen ? ReactDOM.createPortal(
    <React.Fragment>
        <div>
            <div className="modal-overlay2" />
            <div className="modal-wrapper2" aria-modal aria-hidden tabIndex={-1} role="dialog">
                <div className="modal2 modal-sm ">
                    <div class="modal-content">
                        <div class="modal-header border-0">
                            <h5 class="modal-title" id="exampleModalLabel"></h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={toggle} ></button>
                        </div>
                        <div class="modal-body">
                            <img src={peopleDetail[0].image} class="card-img-top img-fluid" alt="..."
                            />
                        </div>
                        <div class="modal-footer d-block justify-content:center align-items:center border-0">
                            <h5 class="card-title text-secondary text-center">{peopleDetail[0].names} &nbsp; {peopleDetail[0].surname}</h5>
                            <hr/>
                            <p class="card-text text-secondary text-center">{peopleDetail[0].city}</p>
                            <h6 class="card-text text-secondary text-center">{peopleDetail[0].country}</h6>
                            <p class="card-text text-secondary text-center">{peopleDetail[0].cell}</p>
                            <p class="card-text text-secondary text-center">{peopleDetail[0].email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>, document.getElementById('modal')
) : null



export default PeopleModal
