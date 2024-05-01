import {createSlice} from '@reduxjs/toolkit'
// Initial state for the lead score  slice 
const initialState={
    leadRegistrationAndVerification: {
         title: "Lead Registration and Verification",
         description: "Set up lead scores for lead registration, verification, and multiple instances/attempts.",
         steps: {
             unverifiedEmailOrMobile: {
                 title: "Lead registered with an unverified Email/Mobile",
                 value: 0
             },
             verifiedEmailOrMobile: {
                 title: "Lead has verified Email/Mobile while registering",
                 value: 0
             },
             createdAccount: {
                 title: "Lead created his account",
                 value: 0
             },
             secondaryAndTertiaryAttemptCaptured: {
                 title: "Secondary and Tertiary Attempt Captured",
                 value: 0
             },
             offlineUploadUnverifiedEmailOrMobile: {
                 title: "Lead uploaded offline with unverified Email or Mobile",
                 value: 0
             },
             registrationAttemptCaptured: {
                 title: "Registration Attempt Captured",
                 value: 0
             },
             verifiedMobileViaOTP: {
                 title: "Lead has verified Mobile via OTP or Direct Login Link",
                 value: 0
             },
             registeredThroughEmailBypass: {
                 title: "Lead Registered through Email Bypass",
                 value: 0
             }
         }
     },
     applicationActivities:{
         title: "Application Activities",
         description: "Assign lead scores when a candidate starts an application or makes a payment.",
         steps: {
             loggedIn: {
                 title: "Applicant has logged-in",
                 value: 0
             },
             startedApplication: {
                 title: "Applicant has started an Application",
                 value: 0
             },
             completedFormStage: {
                 title: "Applicant has completed a Form Stage",
                 value: 0
             },
             initiatedApplicationFeePayment: {
                 title: "Student has initiated Application fee payment",
                 value: 0
             },
             madeApplicationFeePayment: {
                 title: "Student has made the Application fee payment",
                 value: 0
             },
             printedApplicationForm: {
                 title: "Student has printed the Application form",
                 value: 0
             }
         }
     },
     emailActivities: {
         title: "Email Activities",
         description: "Allocate lead scores based on different email activities, such as opens or clicks.",
         steps: {
             emailDelivered: {
                 title: "Email Delivered",
                 everytime:false,
                 firstTimeOnly:false,
                 value: 0
             },
             emailOpened: {
                 title: "Email Opened",
                 value: 0
             },
             emailLinkClicked: {
                 title: "Email Link Clicked",
                 value: 0
             },
             emailBounced: {
                 title: "Email Bounced",
                 everytime:false,
                 firstTimeOnly:false,
                 value: 0
             },
             emailInvalid: {
                 title: "Email Invalid",
                 everytime:false,
                 firstTimeOnly:false,
                 value: 0
             },
             emailUnsubscribed: {
                 title: "Email Unsubscribed",
                 everytime:false,
                 firstTimeOnly:false,
                 value: 0
             },
             emailMarkedSpam: {
                 title: "Email Marked Spam",
                 everytime:false,
                 firstTimeOnly:false,
                 value: 0
             },
             emailDropped: {
                 title: "Email Dropped",
                 everytime:false,
                 firstTimeOnly:false,
                 value: 0
             }
         }
     },
     smsActivities: {
         title: "SMS Activities",
         description: "Determine lead scores based on various SMS activities, including opens or clicks.",
         steps: {
             smsDelivered: {
                 title: "SMS Delivered",
                 everytime:false,
                 firstTimeOnly:false,
                 value: 0
             },
             smsLinkClicked: {
                 title: "SMS Link Clicked",
                 value: 0
             },
             smsNDNCRejected: {
                 title: "SMS NDNC rejected",
                 value: 0
             },
             smsBlacklist: {
                 title: "SMS Blacklist",
                 value: 0
             },
             smsDropped: {
                 title: "SMS Dropped",
                 value: 0
             },
             smsExpired: {
                 title: "SMS Expired",
                 value: 0
             },
             smsMsgInboxFull: {
                 title: "SMS MSG Inbox Full",
                 value: 0
             },
             smsAbsentSubscriber: {
                 title: "SMS Absent Subscriber",
                 everytime:false,
                 firstTimeOnly:false,
                 value: 0
             },
             smsInvalidSubscriber: {
                 title: "SMS Invalid Subscriber",
                 everytime:false,
                 firstTimeOnly:false,
                 value: 0
             }
         }
     },
     whatsappActivities: {
         title: "WhatsApp Activities",
         description: "Assign lead scores based on different WhatsApp interactions, such as reads or replies.",
         steps: {
             whatsappDelivered: {
                 title: "WhatsApp Delivered",
                everytime:false,
                firstTimeOnly:false,
                 value: 0
             },
             whatsappRead: {
                 title: "WhatsApp Read",
                everytime:false,
                firstTimeOnly:false,
                 value: 0
             },
             whatsappReply: {
                 title: "WhatsApp Reply",
                everytime:false,
                firstTimeOnly:false,
                 value: 0
             },
             whatsappUnsubscribed: {
                 title: "WhatsApp Unsubscribed",
                everytime:false,
                firstTimeOnly:false,
                 value: 0
             }
         }
     },
     otherApplicantActivities:{
         title: "Other Applicant Activities",
         description: "Set up lead scores based on various activities performed by the applicant or the counselor.",
         steps: {
             counsellorAddedFollowUpForLead: {
                 title: "Counsellor Added follow Up for Lead",
                 everytime:false,
                firstTimeOnly:false,
                 value: 0
             },
             applicantRaisedQuery: {
                 title: "Applicant raised a Query",
                 everytime:false,
                firstTimeOnly:false,
                 value: 0
             },
             applicantProvidedFeedbackOnQueryClosure: {
                 title: "Applicant provided Feedback on Query closure",
                 everytime:false,
                firstTimeOnly:false,
                 value: 0
             }
         }
     },
     telephonyActivities:{
         title: "Telephony Activities",
         description: "Allocate lead scores based on different telephony activities, including missed, inbound, and outbound calls.",
         steps: {
             counsellorInitiatedOutboundCall: {
                 title: "Counsellor initiated Outbound call",
                 everytime:false,
                firstTimeOnly:false,
                 value: 0
             },
             counsellorOutboundSuccess: {
                 title: "Counsellor Outbound Success",
                 everytime:false,
                firstTimeOnly:false,
                 value: 0
             },
             counsellorReceivedCallFromApplicant: {
                 title: "Counsellor received a call from applicant",
                 everytime:false,
                firstTimeOnly:false,
                 value: 0
             },
             counsellorMissedApplicantsCall: {
                 title: "Counsellor missed applicants call",
                 everytime:false,
                firstTimeOnly:false,
                 value: 0
             },
             applicantMissedCounsellorsCall: {
                 title: "Applicant Missed Counsellors Call",
                 everytime:false,
                firstTimeOnly:false,
                 value: 0
             }
         }
     }
}

const leadScoreSlice=createSlice({
    name:'leadScore',
    initialState,
    reducers:{
        updateLeadRegistrationAndVerification (state,action){
            const {key,value,subKey}=action.payload
            state.leadRegistrationAndVerification.steps[subKey][key]=value
        } ,
        updateApplicationActivities (state,action){
            const {key,subKey,value}=action.payload
            state.applicationActivities.steps[subKey][key]=value
        } ,
        updateEmailActivities(state,action){
            const {key,subKey,value}=action.payload
            state.emailActivities.steps[subKey][key]=value
        } ,
        updateSmsActivities(state,action){
            const {key,subKey,value}=action.payload
            state.smsActivities.steps[subKey][key]=value
        } ,
        updateWhatsappActivities(state,action){
            const {key,subKey,value}=action.payload
            state.whatsappActivities.steps[subKey][key]=value
        } ,
        updateOtherApplicantActivities(state,action){
            const {key,subKey,value}=action.payload
            state.otherApplicantActivities.steps[subKey][key]=value
        } ,
        updateTelephonyActivities(state,action){
            const {key,subKey,value}=action.payload
            state.telephonyActivities.steps[subKey][key]=value
        } ,
    }
})
export const {updateLeadRegistrationAndVerification,updateApplicationActivities,updateEmailActivities,updateSmsActivities,updateWhatsappActivities,updateOtherApplicantActivities,updateTelephonyActivities} = leadScoreSlice.actions;
export default leadScoreSlice.reducer;

