import actions from '../icons/actions.svg'
import addCircle from '../icons/add-circle.svg'
import android from '../icons/android.svg'
import angledArrowLeft from '../icons/angled-arrow-left.svg'
import angledArrowRight from '../icons/angled-arrow-right.svg'
import apple from '../icons/apple.svg'
import arrowDown from '../icons/arrow-down.svg'
import arrowLeft from '../icons/arrow-left.svg'
import arrowRight from '../icons/arrow-right.svg'
import arrowUp from '../icons/arrow-up.svg'
import asterisk from '../icons/asterisk.svg'
import browser from '../icons/browser.svg'
import bulletPoint from '../icons/bullet-point.svg'
import burger from '../icons/burger.svg'
import calendar from '../icons/calendar.svg'
import calendarPrimary from '../icons/calendar-primary.svg'
import camera from '../icons/camera.svg'
import cameraPrimary from '../icons/camera-primary.svg'
import check from '../icons/check.svg'
import checkCircle from '../icons/check-circle.svg'
import chevronDown from '../icons/chevron-down.svg'
import chevronLeft from '../icons/chevron-left.svg'
import chevronRight from '../icons/chevron-right.svg'
import chevronUp from '../icons/chevron-up.svg'
import clock from '../icons/clock.svg'
import cog from '../icons/cog.svg'
import copy from '../icons/copy.svg'
import cross from '../icons/cross.svg'
import deposit from '../icons/deposit.svg'
import document from '../icons/document.svg'
import dotsHandleReorder from '../icons/dots-handle-reorder.svg'
import download from '../icons/download.svg'
import edit from '../icons/edit.svg'
import ellipsis from '../icons/ellipsis.svg'
import email from '../icons/email.svg'
import emailPrimary from '../icons/email-primary.svg'
import exclamation from '../icons/exclamation.svg'
import exclamationError from '../icons/exclamation-error.svg'
import exclamationWarning from '../icons/exclamation-warning.svg'
import exit from '../icons/exit.svg'
import external from '../icons/external.svg'
import filter from '../icons/filter.svg'
import forwardArrow from '../icons/forward-arrow.svg'
import gift from '../icons/gift.svg'
import history from '../icons/history.svg'
import house from '../icons/house.svg'
import housePrimary from '../icons/house-primary.svg'
import idCard from '../icons/id-card.svg'
import idCardPrimary from '../icons/id-card-primary.svg'
import infoCircle from '../icons/info-circle.svg'
import language from '../icons/language.svg'
import list from '../icons/list.svg'
import lock from '../icons/lock.svg'
import lockPrimary from '../icons/lock-primary.svg'
import lockSuccess from '../icons/lock-success.svg'
import paper from '../icons/paper.svg'
import paperPrimary from '../icons/paper-primary.svg'
import passport from '../icons/passport.svg'
import passportPrimary from '../icons/passport-primary.svg'
import photoUser from '../icons/photo-user.svg'
import photoUserPrimary from '../icons/photo-user-primary.svg'
import pin from '../icons/pin.svg'
import pinPrimary from '../icons/pin-primary.svg'
import playCircle from '../icons/play-circle.svg'
import profile from '../icons/profile.svg'
import questionCircle from '../icons/question-circle.svg'
import refresh from '../icons/refresh.svg'
import revert from '../icons/revert.svg'
import scales from '../icons/scales.svg'
import search from '../icons/search.svg'
import star from '../icons/star.svg'
import starCircle from '../icons/star-circle.svg'
import stopwatch from '../icons/stopwatch.svg'
import subtractCircle from '../icons/subtract-circle.svg'
import timesCircle from '../icons/times-circle.svg'
import transfer from '../icons/transfer.svg'
import trash from '../icons/trash.svg'
import trashError from '../icons/trash-error.svg'
import upload from '../icons/upload.svg'
import windows from '../icons/windows.svg'
import withdrawal from '../icons/withdrawal.svg'
import wrench from '../icons/wrench.svg'

export const PhoenixIconsOutlinedSrc = {
	actions,
	'add-circle': addCircle,
	android,
	'angled-arrow-left': angledArrowLeft,
	'angled-arrow-right': angledArrowRight,
	apple,
	'arrow-down': arrowDown,
	'arrow-left': arrowLeft,
	'arrow-right': arrowRight,
	'arrow-up': arrowUp,
	asterisk,
	browser,
	'bullet-point': bulletPoint,
	burger,
	calendar,
	camera,
	check,
	'check-circle': checkCircle,
	clock,
	cog,
	copy,
	cross,
	deposit,
	document,
	'chevron-down': chevronDown,
	'chevron-left': chevronLeft,
	'chevron-right': chevronRight,
	'chevron-up': chevronUp,
	'dots-handle-reorder': dotsHandleReorder,
	download,
	edit,
	ellipsis,
	email,
	exclamation,
	exit,
	external,
	filter,
	'forward-arrow': forwardArrow,
	gift,
	history,
	house,
	'id-card': idCard,
	'info-circle': infoCircle,
	language,
	list,
	lock,
	paper,
	passport,
	'photo-user': photoUser,
	pin,
	'play-circle': playCircle,
	profile,
	'question-circle': questionCircle,
	refresh,
	revert,
	scales,
	search,
	star,
	'star-circle': starCircle,
	stopwatch,
	'subtract-circle': subtractCircle,
	'times-circle': timesCircle,
	transfer,
	trash,
	upload,
	windows,
	withdrawal,
	wrench
} as const

export const PhoenixIconsColoredSrc = {
	'calendar-primary': calendarPrimary,
	'camera-primary': cameraPrimary,
	'email-primary': emailPrimary,
	'exclamation-error': exclamationError,
	'exclamation-warning': exclamationWarning,
	'house-primary': housePrimary,
	'id-card-primary': idCardPrimary,
	'lock-primary': lockPrimary,
	'lock-success': lockSuccess,
	'paper-primary': paperPrimary,
	'passport-primary': passportPrimary,
	'photo-user-primary': photoUserPrimary,
	'pin-primary': pinPrimary,
	'trash-error': trashError
} as const

export const PhoenixIconsSrc = {
	...PhoenixIconsOutlinedSrc,
	...PhoenixIconsColoredSrc
} as const

export const PhoenixIconsOutlined = Object.keys(
	PhoenixIconsOutlinedSrc
) as PhoenixIconsOutlined[]

export const PhoenixIconsColored = Object.keys(
	PhoenixIconsColoredSrc
) as PhoenixIconsColored[]

export const PhoenixIcons = Object.keys(PhoenixIconsSrc) as PhoenixIcons[]

export type PhoenixIconsOutlined = keyof typeof PhoenixIconsOutlinedSrc
export type PhoenixIconsColored = keyof typeof PhoenixIconsColoredSrc
export type PhoenixIcons = keyof typeof PhoenixIconsSrc
