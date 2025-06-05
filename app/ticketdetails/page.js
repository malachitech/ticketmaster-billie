"use client";

import { useState } from "react";

import { FaXmark } from "react-icons/fa6";
import { BsQrCodeScan } from "react-icons/bs";
import { IoTicketSharp } from "react-icons/io5";
import { IoIosInformationCircle } from "react-icons/io";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const ticketdetails = () => {


    return (
        <div>

            {/* header */}
            <div className="header details_header">
                <div className="x">
                    <FaXmark />
                </div>

                <div className="title-one">
                    <h2>Ticket Details</h2>
                </div>

                <div className="help">
                    <h2>Help</h2>
                </div>
            </div>

            <div className="ticket-details">

                <div className="ticket-detail">
                    <div className="ticket_details_titles">
                        Seat location
                    </div>

                    <div className="ticket_details_info">
                        Sec 110/W/303-304
                    </div>
                </div>

                <hr className="details_hr" />

                <div className="ticket-detail">
                    <div className="ticket_details_titles">
                        BILLIE EILISH: HIT ME HARD AND SOFT: THE TOUR
                    </div>

                    <div className="ticket_details_info">
                        Sun, 13 Jul, 18:30

                    </div>
                </div>

                <hr className="details_hr" />

                <div className="ticket-detail">
                    <div className="ticket_details_titles">
                        Entry Info
                    </div>

                    <div className="ticket_details_info">
                        UPPER TIER
                    </div>
                </div>

                <hr className="details_hr" />

                <div className="ticket-detail">
                    <div className="ticket_details_titles">
                        Ticket Info
                    </div>

                    <div className="ticket_details_info">
                        Billie Eilish: Hit me hard and soft: The tour 2025
                        The O2 Arena, United Kingdom.  Sun, 13 Jul 2025, 18:30

                    </div>
                </div>

                <hr className="details_hr" />

                <div className="ticket-detail">
                    <div className="ticket_details_titles">
                        Barcode Number

                    </div>

                    <div className="ticket_details_info">
                        67625105095377336ZF
                    </div>
                </div>

                <hr className="details_hr" />

                <div className="ticket-detail">
                    <div className="ticket_details_titles">
                        The O2 Arena 
                    </div>

                    <div className="ticket_details_info">
                        London, United kingdom
                    </div>
                </div>

                <hr className="details_hr" />

                <div className="ticket-detail">
                    <div className="ticket_details_titles">
                        Order Number

                    </div>

                    <div className="ticket_details_info">
                        7-10992/AAO
                    </div>
                </div>

                <hr className="details_hr" />

                <div className="ticket-detail">
                    <div className="ticket_details_titles">
                        Ticket type

                    </div>

                    <div className="ticket_details_info">
                        Reserved Seated Tickets
                    </div>
                </div>

                <hr className="details_hr" />

                <div className="ticket-detail">
                    <div className="ticket_details_titles">
                        Purchase date

                    </div>


                    <div className="ticket_details_info">
                        Thu, May 16 2024 - 09:36AM
                    </div>
                </div>

                <hr className="details_hr" />

                <div className="ticket-detail">
                    <div className="ticket_details_titles">
                        Ticket Price

                    </div>


                    <div className="ticket_details_info flexed">
                        <div className="ticket_details_info_flexed right">
                            Reserved Seated Tickets x2 :
                        </div>

                        <div className="ticket_details_info_flexed left">
                            £204.26
                        </div>

                    </div>

                    <div className="ticket_details_info flexed">
                        <div className="ticket_details_info_flexed right">
                            GRAND TOTAL:
                        </div>

                        <div className="ticket_details_info_flexed left">
                            £408.52
                        </div>

                    </div>

                </div>

                {/* terms */}

                <hr className="details_hr" />

                <div className="ticket-detail">
                    <div className="ticket_details_titles">
                        Terms & Conditions

                    </div>


                    <div className="ticket_details_info">

                        Take care of your ticket, as it cannot be replaced
                        if lost, stolen or destroyed, and is valid only for event
                        and seat printed on ticket. This ticket is a revocable license
                        to attend the event listed on the front of the ticket and is
                        subject
                        to the full terms found at <a className="details_link" href="www.ticketmaster.com">www.ticketmaster.com</a>. Such
                        license may be revoked without refund for noncompliance
                        with terms. Unlawful sale or attempted sale prohibited.

                    </div>
                </div>
            </div>

        </div>
    );
};

export default ticketdetails;
