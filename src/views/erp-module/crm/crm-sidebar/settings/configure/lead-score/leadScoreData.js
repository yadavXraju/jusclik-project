export const leadScoreData={
   leadRegistrationAndVerification: {
        title: "Lead Registration and Verification",
        description: "Set up lead scores for lead registration, verification, and multiple instances/attempts.",
        steps: [
            "Lead registered with an unverified Email/Mobile",
            "Lead has verified Email/Mobile while registering",
            "Lead created his account",
            "Secondary and Tertiary Attempt Captured",
            "Lead uploaded offline with unverified Email or Mobile",
            "Registration Attempt Captured",
            "Lead has verified Mobile via OTP or Direct Login Link",
            "Lead Registered through Email Bypass"
        ]
    },
    applicationActivities:{
        title: "Application Activities",
        description: "Assign lead scores when a candidate starts an application or makes a payment.",
        steps: [
            "Applicant has logged-in",
            "Applicant has started an Application",
            "Applicant has completed a Form Stage",
            "Student has initiated Application fee payment",
            "Student has made the Application fee payment",
            "Student has printed the Application form"
        ]
    },
    emailActivities: {
        title: "Email Activities",
        description: "Allocate lead scores based on different email activities, such as opens or clicks.",
        steps: [
            "Email Delivered",
            "Email Opened",
            "Email Link Clicked",
            "Email Bounced",
            "Email Invalid",
            "Email Unsubscribed",
            "Email Marked Spam",
            "Email Dropped"
        ]
    },
    smsActivities: {
        title: "SMS Activities",
        description: "Determine lead scores based on various SMS activities, including opens or clicks.",
        steps: [
            "SMS Delivered",
            "SMS Link Clicked",
            "SMS NDNC rejected",
            "SMS Blacklist",
            "SMS Dropped",
            "SMS Expired",
            "SMS MSG Inbox Full",
            "SMS Absent Subscriber",
            "SMS Invalid Subscriber"
        ]
    },
    whatsappActivities: {
        title: "WhatsApp Activities",
        description: "Assign lead scores based on different WhatsApp interactions, such as reads or replies.",
        steps: [
            "WhatsApp Delivered",
            "WhatsApp Read",
            "WhatsApp Reply",
            "WhatsApp Unsubscribed"
        ]
    },
    otherApplicantActivities:{
        title: "Other Applicant Activities",
        description: "Set up lead scores based on various activities performed by the applicant or the counselor.",
        steps: [
            "Counsellor Added follow Up for Lead",
            "Applicant raised a Query",
            "Applicant provided Feedback on Query closure"
        ]
    },
    telephonyActivities:{
        title: "Telephony Activities",
        description: "Allocate lead scores based on different telephony activities, including missed, inbound, and outbound calls.",
        steps: [
            "Counsellor initiated Outbound call",
            "Counsellor Outbound Success",
            "Counsellor received a call from applicant",
            "Counsellor missed applicants call",
            "Applicant Missed Counsellors Call"
        ]
    }
}