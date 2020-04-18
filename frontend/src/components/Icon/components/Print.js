import React from "react";

const Print = ({width = 30}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={width}>
        <path d="M482,152.58V135c0-24.813-20.187-45-45-45h-15c0-13.234-3.234-24.447-13.18-34.393L366.393,13.18
			C357.894,4.681,346.594,0,334.574,0H105c-8.284,0-15,6.716-15,15v75H75c-24.813,0-45,20.187-45,45v17.58
			C12.541,158.772,0,175.445,0,195v152c0,24.813,20.187,45,45,45h45v105c0,8.284,6.716,15,15,15h302c8.284,0,15-6.716,15-15V392h45
			c24.813,0,45-20.187,45-45V195C512,175.445,499.459,158.772,482,152.58z M422,120h15c8.271,0,15,6.729,15,15v15h-30V120z M332,30
			c2.837,0,8.3-0.487,13.18,4.393l42.427,42.427C392.402,81.615,392,86.903,392,90h-60V30z M120,30h182v75c0,8.284,6.716,15,15,15
			h75v30H120V30z M60,135c0-8.271,6.729-15,15-15h15v30H60V135z M392,482H120V332h272V482z M482,347c0,8.271-6.729,15-15,15h-45v-30
			h15c8.284,0,15-6.716,15-15s-6.716-15-15-15H75c-8.284,0-15,6.716-15,15s6.716,15,15,15h15v30H45c-8.271,0-15-6.729-15-15V195
			c0-8.271,6.729-15,15-15h422c8.271,0,15,6.729,15,15V347z"/>
        <path d="M135,210H75c-8.284,0-15,6.716-15,15s6.716,15,15,15h60c8.284,0,15-6.716,15-15S143.284,210,135,210z"/>
        <path d="M347,362H165c-8.284,0-15,6.716-15,15s6.716,15,15,15h182c8.284,0,15-6.716,15-15S355.284,362,347,362z"/>
        <path d="M347,422H165c-8.284,0-15,6.716-15,15s6.716,15,15,15h182c8.284,0,15-6.716,15-15S355.284,422,347,422z"/>
    </svg>

);

export default Print;