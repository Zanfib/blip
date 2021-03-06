/*
 * == BSD2 LICENSE ==
 * Copyright (c) 2015, Tidepool Project
 *
 * This program is free software; you can redistribute it and/or modify it under
 * the terms of the associated License, which is identical to the BSD 2-Clause
 * License as published by the Open Source Initiative at opensource.org.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the License for more details.
 *
 * You should have received a copy of the License along with this program; if
 * not, you can obtain one from Tidepool Project at tidepool.org.
 * == BSD2 LICENSE ==
 */

/**
 * Syncronous action types
 */
export const SHOW_WELCOME_MESSAGE = 'SHOW_WELCOME_MESSAGE';
export const HIDE_WELCOME_MESSAGE = 'HIDE_WELCOME_MESSAGE';

export const SHOW_BANNER = 'SHOW_BANNER';
export const HIDE_BANNER = 'HIDE_BANNER';
export const DISMISS_BANNER = 'DISMISS_BANNER';

export const ACKNOWLEDGE_NOTIFICATION = 'ACKNOWLEDGE_NOTIFICATION';

// these two aren't being used yet!
export const SET_TIME_PREFERENCES = 'SET_TIME_PREFERENCES';
export const SET_BLOOD_GLUCOSE_PREFERENCES = 'SET_BLOOD_GLUCOSE_PREFERENCES';

export const CLEAR_PATIENT_IN_VIEW = 'CLEAR_PATIENT_IN_VIEW';
export const CLEAR_PATIENT_DATA = 'CLEAR_PATIENT_DATA';
export const CLOSE_MESSAGE_THREAD = 'CLOSE_MESSAGE_THREAD';

export const ADD_PATIENT_NOTE = 'ADD_PATIENT_NOTE';
export const UPDATE_PATIENT_NOTE = 'UPDATE_PATIENT_NOTE';

/*
 * Asyncronous action types
 */

// user.get
export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

// invitation.getSent
export const FETCH_PENDING_SENT_INVITES_REQUEST = 'FETCH_PENDING_SENT_INVITES_REQUEST';
export const FETCH_PENDING_SENT_INVITES_SUCCESS = 'FETCH_PENDING_SENT_INVITES_SUCCESS';
export const FETCH_PENDING_SENT_INVITES_FAILURE = 'FETCH_PENDING_SENT_INVITES_FAILURE';

// invitation.getReceived
export const FETCH_PENDING_RECEIVED_INVITES_REQUEST = 'FETCH_PENDING_RECEIVED_INVITES_REQUEST';
export const FETCH_PENDING_RECEIVED_INVITES_SUCCESS = 'FETCH_PENDING_RECEIVED_INVITES_SUCCESS';
export const FETCH_PENDING_RECEIVED_INVITES_FAILURE = 'FETCH_PENDING_RECEIVED_INVITES_FAILURE';

// patient.getAll
export const FETCH_PATIENTS_REQUEST = 'FETCH_PATIENTS_REQUEST';
export const FETCH_PATIENTS_SUCCESS = 'FETCH_PATIENTS_SUCCESS';
export const FETCH_PATIENTS_FAILURE = 'FETCH_PATIENTS_FAILURE';

// patient.get and care team
export const FETCH_PATIENT_REQUEST = 'FETCH_PATIENT_REQUEST';
export const FETCH_PATIENT_SUCCESS = 'FETCH_PATIENT_SUCCESS';
export const FETCH_PATIENT_FAILURE = 'FETCH_PATIENT_FAILURE';

// metadata.preferences.get
export const FETCH_PREFERENCES_REQUEST = 'FETCH_PREFERENCES_REQUEST';
export const FETCH_PREFERENCES_SUCCESS = 'FETCH_PREFERENCES_SUCCESS';
export const FETCH_PREFERENCES_FAILURE = 'FETCH_PREFERENCES_FAILURE';

// metadata.settings.get
export const FETCH_SETTINGS_REQUEST = 'FETCH_SETTINGS_REQUEST';
export const FETCH_SETTINGS_SUCCESS = 'FETCH_SETTINGS_SUCCESS';
export const FETCH_SETTINGS_FAILURE = 'FETCH_SETTINGS_FAILURE';

// patientData.get
export const FETCH_PATIENT_DATA_REQUEST = 'FETCH_PATIENT_DATA_REQUEST';
export const FETCH_PATIENT_DATA_SUCCESS = 'FETCH_PATIENT_DATA_SUCCESS';
export const FETCH_PATIENT_DATA_FAILURE = 'FETCH_PATIENT_DATA_FAILURE';

// team.getMessageThread
export const FETCH_MESSAGE_THREAD_REQUEST = 'FETCH_MESSAGE_THREAD_REQUEST';
export const FETCH_MESSAGE_THREAD_SUCCESS = 'FETCH_MESSAGE_THREAD_SUCCESS';
export const FETCH_MESSAGE_THREAD_FAILURE = 'FETCH_MESSAGE_THREAD_FAILURE';

// user.login
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// user.logout
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

// user.signup
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

// user.confirmSignup
export const CONFIRM_SIGNUP_REQUEST = 'CONFIRM_SIGNUP_REQUEST';
export const CONFIRM_SIGNUP_SUCCESS = 'CONFIRM_SIGNUP_SUCCESS';
export const CONFIRM_SIGNUP_FAILURE = 'CONFIRM_SIGNUP_FAILURE';

// user.custodialConfirmSignup
export const VERIFY_CUSTODIAL_REQUEST = 'VERIFY_CUSTODIAL_REQUEST';
export const VERIFY_CUSTODIAL_SUCCESS = 'VERIFY_CUSTODIAL_SUCCESS';
export const VERIFY_CUSTODIAL_FAILURE = 'VERIFY_CUSTODIAL_FAILURE';

// user.confirmPasswordReset
export const CONFIRM_PASSWORD_RESET_REQUEST = 'CONFIRM_PASSWORD_RESET_REQUEST';
export const CONFIRM_PASSWORD_RESET_SUCCESS = 'CONFIRM_PASSWORD_RESET_SUCCESS';
export const CONFIRM_PASSWORD_RESET_FAILURE = 'CONFIRM_PASSWORD_RESET_FAILURE';

// user.acceptTerms
export const ACCEPT_TERMS_REQUEST = 'ACCEPT_TERMS_REQUEST';
export const ACCEPT_TERMS_SUCCESS = 'ACCEPT_TERMS_SUCCESS';
export const ACCEPT_TERMS_FAILURE = 'ACCEPT_TERMS_FAILURE';

// user.resendEmailVerification
export const RESEND_EMAIL_VERIFICATION_REQUEST = 'RESEND_EMAIL_VERIFICATION_REQUEST';
export const RESEND_EMAIL_VERIFICATION_SUCCESS = 'RESEND_EMAIL_VERIFICATION_SUCCESS';
export const RESEND_EMAIL_VERIFICATION_FAILURE = 'RESEND_EMAIL_VERIFICATION_FAILURE';

// patient.post
export const SETUP_DATA_STORAGE_REQUEST = 'SETUP_DATA_STORAGE_REQUEST';
export const SETUP_DATA_STORAGE_SUCCESS = 'SETUP_DATA_STORAGE_SUCCESS';
export const SETUP_DATA_STORAGE_FAILURE = 'SETUP_DATA_STORAGE_FAILURE';

// access.leaveGroup
export const REMOVE_MEMBERSHIP_IN_OTHER_CARE_TEAM_REQUEST = 'REMOVE_MEMBERSHIP_IN_OTHER_CARE_TEAM_REQUEST';
export const REMOVE_MEMBERSHIP_IN_OTHER_CARE_TEAM_SUCCESS = 'REMOVE_MEMBERSHIP_IN_OTHER_CARE_TEAM_SUCCESS';
export const REMOVE_MEMBERSHIP_IN_OTHER_CARE_TEAM_FAILURE = 'REMOVE_MEMBERSHIP_IN_OTHER_CARE_TEAM_FAILURE';

// access.removeMember
export const REMOVE_MEMBER_FROM_TARGET_CARE_TEAM_REQUEST = 'REMOVE_MEMBER_FROM_TARGET_CARE_TEAM_REQUEST';
export const REMOVE_MEMBER_FROM_TARGET_CARE_TEAM_SUCCESS = 'REMOVE_MEMBER_FROM_TARGET_CARE_TEAM_SUCCESS';
export const REMOVE_MEMBER_FROM_TARGET_CARE_TEAM_FAILURE = 'REMOVE_MEMBER_FROM_TARGET_CARE_TEAM_FAILURE';

// user.requestPasswordReset
export const REQUEST_PASSWORD_RESET_REQUEST = 'REQUEST_PASSWORD_RESET_REQUEST';
export const REQUEST_PASSWORD_RESET_SUCCESS = 'REQUEST_PASSWORD_RESET_SUCCESS';
export const REQUEST_PASSWORD_RESET_FAILURE = 'REQUEST_PASSWORD_RESET_FAILURE';

// invitation.send
export const SEND_INVITE_REQUEST = 'SEND_INVITE_REQUEST';
export const SEND_INVITE_SUCCESS = 'SEND_INVITE_SUCCESS';
export const SEND_INVITE_FAILURE = 'SEND_INVITE_FAILURE';

// invitation.cancel
export const CANCEL_SENT_INVITE_REQUEST = 'CANCEL_SENT_INVITE_REQUEST';
export const CANCEL_SENT_INVITE_SUCCESS = 'CANCEL_SENT_INVITE_SUCCESS';
export const CANCEL_SENT_INVITE_FAILURE = 'CANCEL_SENT_INVITE_FAILURE';

// invitation.accept
export const ACCEPT_RECEIVED_INVITE_REQUEST = 'ACCEPT_RECEIVED_INVITE_REQUEST';
export const ACCEPT_RECEIVED_INVITE_SUCCESS = 'ACCEPT_RECEIVED_INVITE_SUCCESS';
export const ACCEPT_RECEIVED_INVITE_FAILURE = 'ACCEPT_RECEIVED_INVITE_FAILURE';

// invitation.dismiss
export const REJECT_RECEIVED_INVITE_REQUEST = 'REJECT_RECEIVED_INVITE_REQUEST';
export const REJECT_RECEIVED_INVITE_SUCCESS = 'REJECT_RECEIVED_INVITE_SUCCESS';
export const REJECT_RECEIVED_INVITE_FAILURE = 'REJECT_RECEIVED_INVITE_FAILURE';

// access.setMemberPermissions
export const SET_MEMBER_PERMISSIONS_REQUEST = 'SET_MEMBER_PERMISSIONS_REQUEST';
export const SET_MEMBER_PERMISSIONS_SUCCESS = 'SET_MEMBER_PERMISSIONS_SUCCESS';
export const SET_MEMBER_PERMISSIONS_FAILURE = 'SET_MEMBER_PERMISSIONS_FAILURE';

// no api call in handler
export const UPDATE_PATIENT_DATA_REQUEST = 'UPDATE_PATIENT_DATA_REQUEST';
export const UPDATE_PATIENT_DATA_SUCCESS = 'UPDATE_PATIENT_DATA_SUCCESS';
export const UPDATE_PATIENT_DATA_FAILURE = 'UPDATE_PATIENT_DATA_FAILURE';

// patient.put
export const UPDATE_PATIENT_REQUEST = 'UPDATE_PATIENT_REQUEST';
export const UPDATE_PATIENT_SUCCESS = 'UPDATE_PATIENT_SUCCESS';
export const UPDATE_PATIENT_FAILURE = 'UPDATE_PATIENT_FAILURE';

// metadata.settings.put
export const UPDATE_PATIENT_BG_UNITS_REQUEST = 'UPDATE_PATIENT_BG_UNITS_REQUEST';
export const UPDATE_PATIENT_BG_UNITS_SUCCESS = 'UPDATE_PATIENT_BG_UNITS_SUCCESS';
export const UPDATE_PATIENT_BG_UNITS_FAILURE = 'UPDATE_PATIENT_BG_UNITS_FAILURE';

// metadata.preferences.put
export const UPDATE_PREFERENCES_REQUEST = 'UPDATE_PREFERENCES_REQUEST';
export const UPDATE_PREFERENCES_SUCCESS = 'UPDATE_PREFERENCES_SUCCESS';
export const UPDATE_PREFERENCES_FAILURE = 'UPDATE_PREFERENCES_FAILURE';

// metadata.settings.put
export const UPDATE_SETTINGS_REQUEST = 'UPDATE_SETTINGS_REQUEST';
export const UPDATE_SETTINGS_SUCCESS = 'UPDATE_SETTINGS_SUCCESS';
export const UPDATE_SETTINGS_FAILURE = 'UPDATE_SETTINGS_FAILURE';

// user.put
export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

// log api arror
export const LOG_ERROR_REQUEST = 'LOG_ERROR_REQUEST';
export const LOG_ERROR_SUCCESS = 'LOG_ERROR_SUCCESS';
// no such thing as LOG_ERROR_FAILURE

// shared data donation accounts
export const FETCH_DATA_DONATION_ACCOUNTS_REQUEST = 'FETCH_DATA_DONATION_ACCOUNTS_REQUEST';
export const FETCH_DATA_DONATION_ACCOUNTS_SUCCESS = 'FETCH_DATA_DONATION_ACCOUNTS_SUCCESS';
export const FETCH_DATA_DONATION_ACCOUNTS_FAILURE = 'FETCH_DATA_DONATION_ACCOUNTS_FAILURE';

export const UPDATE_DATA_DONATION_ACCOUNTS_REQUEST = 'UPDATE_DATA_DONATION_ACCOUNTS_REQUEST';
export const UPDATE_DATA_DONATION_ACCOUNTS_SUCCESS = 'UPDATE_DATA_DONATION_ACCOUNTS_SUCCESS';
export const UPDATE_DATA_DONATION_ACCOUNTS_FAILURE = 'UPDATE_DATA_DONATION_ACCOUNTS_FAILURE';

// data sources
export const FETCH_DATA_SOURCES_REQUEST = 'FETCH_DATA_SOURCES_REQUEST';
export const FETCH_DATA_SOURCES_SUCCESS = 'FETCH_DATA_SOURCES_SUCCESS';
export const FETCH_DATA_SOURCES_FAILURE = 'FETCH_DATA_SOURCES_FAILURE';

export const CONNECT_DATA_SOURCE_REQUEST = 'CONNECT_DATA_SOURCE_REQUEST';
export const CONNECT_DATA_SOURCE_SUCCESS = 'CONNECT_DATA_SOURCE_SUCCESS';
export const CONNECT_DATA_SOURCE_FAILURE = 'CONNECT_DATA_SOURCE_FAILURE';

export const DISCONNECT_DATA_SOURCE_REQUEST = 'DISCONNECT_DATA_SOURCE_REQUEST';
export const DISCONNECT_DATA_SOURCE_SUCCESS = 'DISCONNECT_DATA_SOURCE_SUCCESS';
export const DISCONNECT_DATA_SOURCE_FAILURE = 'DISCONNECT_DATA_SOURCE_FAILURE';

// server time
export const FETCH_SERVER_TIME_REQUEST = 'FETCH_SERVER_TIME_REQUEST';
export const FETCH_SERVER_TIME_SUCCESS = 'FETCH_SERVER_TIME_SUCCESS';
export const FETCH_SERVER_TIME_FAILURE = 'FETCH_SERVER_TIME_FAILURE';

/**
 * Web Worker action types
 */

// pdf generation
export const GENERATE_PDF_REQUEST = 'GENERATE_PDF_REQUEST';
export const GENERATE_PDF_SUCCESS = 'GENERATE_PDF_SUCCESS';
export const GENERATE_PDF_FAILURE = 'GENERATE_PDF_FAILURE';

export const REMOVE_GENERATED_PDFS = 'REMOVE_GENERATED_PDFS';
