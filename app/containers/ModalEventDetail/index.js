import React from 'react';
import './ModalEventDetail.scss';

const ModalEventDetail = (props) => {
  const {
    eventName, eventColor,
    coordinator, email, venue, phone, venueCity, venueState, venueStreet1, description, website,
  } = props.eventDetail;
  return (
    <div className="modalEventDetail">
      <span className="modalEventDetail__title" style={{ backgroundColor: `#${eventColor}` }}>{eventName}</span>
      <div className="modalEventDetail__content">
        {description && (<span className="modalEventDetail__details"><span className="modalEventDetail__modify">Description</span> {description}</span>
        )}
        {coordinator && (<span className="modalEventDetail__details"><span className="modalEventDetail__modify">Event Coordinator</span> {coordinator}</span>
        )}
        {phone && (<span className="modalEventDetail__details"><span className="modalEventDetail__modify">Phone</span> <span className="modalEventDetail__modify_phone">{phone}</span></span>
        )}
        {email && (<span className="modalEventDetail__details"><span className="modalEventDetail__modify">Email</span> <span className="modalEventDetail__modify_phone">{email}</span></span>
        )}
        <div className="modalEventDetail__Address">
          <span className="modalEventDetail__modify">Event Place and Address</span>
          <div>
            {venueStreet1 && (<span className="modalEventDetail__place">{venueStreet1}</span>
            )}
            {venue && (<span className="modalEventDetail__place">{venue}</span>
            )}
            {venueCity && (<span className="modalEventDetail__place">{venueCity}</span>
            )}
            {venueState && (<span className="modalEventDetail__place">{venueState}</span>
            )}
          </div>
        </div>
        {website && (<span className="modalEventDetail__details"><span className="modalEventDetail__modify">Web Site</span> {website}</span>
        )}
      </div>
    </div>
  );
};
export default ModalEventDetail;
