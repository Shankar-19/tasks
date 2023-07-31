import SideBar from "./sidebar.js";
import Notepad from "./notepad.js";
import BackgroundImage from "./backgroundImage.js";

// sections
const sidebarSection = document.getElementById("sidebar");
const textarea = document.getElementById("textarea")

// sidebar buttons
const bar = document.getElementById("bar");
const coverPic = document.getElementById("cover-picture");
const coverPicUploader = document.getElementById("cover-pic-uploader");
const profilePic = document.getElementById("profile-picture");
const profilePicUploader = document.getElementById("profile-pic-uploader");
const userName = document.getElementById("user-name");
const userTitle = document.getElementById("user-title");

// notepad buttons
const notepadCoverPic = document.getElementById("notepad-cover-pic");
const notepadCoverPicUploader = document.getElementById("notepadCoverPic-uploader");
const emoji = document.getElementById("emoji");
const upload = document.getElementById("upload");
const fileUploader = document.getElementById("file-uploader");
const save = document.getElementById("save");
const settings = document.getElementById("settings");
const wordCount = document.getElementById("word-count");
const charCount = document.getElementById("char-count");

// set image
BackgroundImage.set(coverPic, coverPicUploader, "coverPic");
BackgroundImage.set(profilePic, profilePicUploader, "profilePic");
BackgroundImage.set(notepadCoverPic, notepadCoverPicUploader, "notepadCoverPic");

// load image
BackgroundImage.load(coverPic, "coverPic");
BackgroundImage.load(profilePic, "profilePic");
BackgroundImage.load(notepadCoverPic, "notepadCoverPic");

const sidebar = new SideBar(sidebarSection, bar, userName, userTitle);
sidebar.toggle();
sidebar.setUserName();
sidebar.setUserTitle();

const notepad = new Notepad(textarea, emoji, upload, save, settings, wordCount, charCount);
notepad.uploadFile(fileUploader);
notepad.saveNotes();
notepad.setWordCount();
notepad.setCharCount();