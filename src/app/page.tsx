"use client";

import { useState, useEffect } from "react";

// ============================================================
// SAMPLE DATA — based on actual Cakeable / ZABS workflows
// Names lightly altered for demo purposes
// ============================================================
const RUBRIC = [
  "Register", "Drinks", "Cleaning", "Social Cues", "Guest Interaction",
  "Coworker Interaction", "Supervisor Interaction", "Sanitation",
  "Uniform/Hygiene", "Timeliness", "Stamina", "Advocates Self-Care",
  "Initiates Task", "Stays on Task", "Positive Attitude", "Focus",
] as const;

type Intern = {
  id: number;
  name: string;
  initials: string;
  org: "cakeable" | "zabs";
  program: string;
  phase: string;
  status: string;
  statusColor: string;
  reader: boolean;
  employee: boolean;
  coach: string;
  caregiver: string;
  caregiverPhone: string;
  placement: {
    employer: string; role: string; schedule: string; pay: number; startDate: string;
  } | null;
  recentShifts: { date: string; ratings: number[]; note: string }[];
  dream?: string;
  dreamWhy?: string;
};

const INTERNS: Intern[] = [
  { id:1, name:"Sarah G.", initials:"SG", org:"cakeable", program:"Cafe", phase:"Hired", status:"Cafe — Hired",
    statusColor:"badge-green", reader:true, employee:true, coach:"Meg",
    caregiver:"Mom — text only", caregiverPhone:"704-555-0142",
    placement:{ employer:"Cakeable Cafe", role:"Barista", schedule:"M,W,F 8am-11am", pay:13, startDate:"2026-03-17" },
    recentShifts:[
      { date:"2026-05-26", ratings:[3.0,2.0,3.0,4.0,5.0,5.0,5.0,4.0,4.0,5.0,5.0,4.0,2.5,2.5,5.0,4.0], note:"Great day — initiated tasks off list independently for the first time." },
      { date:"2026-05-22", ratings:[3.5,2.0,2.5,4.0,5.0,5.0,5.0,4.0,4.0,5.0,5.0,5.0,2.0,2.0,5.0,4.0], note:"Super impressed with retention. Asked thoughtful questions about espresso pulls." },
      { date:"2026-05-15", ratings:[3.5,1.5,1.5,4.0,4.0,4.0,4.0,4.0,4.0,4.0,4.0,4.0,1.5,1.5,4.0,3.5], note:"Learned several areas behind the bar today." },
    ]},
  { id:2, name:"Christian R.", initials:"CR", org:"cakeable", program:"Cafe", phase:"Trial", status:"Cafe — Trial Period",
    statusColor:"badge-yellow", reader:true, employee:false, coach:"Meg",
    caregiver:"Dad — email", caregiverPhone:"clrcaregiver@email.com",
    placement:null,
    recentShifts:[{ date:"2026-05-15", ratings:[2.5,2.0,2.5,3.5,3.5,3.0,4.0,4.0,4.0,4.0,4.0,4.0,2.0,3.0,4.0,3.5], note:"Trial shift — great at cleaning, register, and sleeves. Strong first impression." }]},
  { id:3, name:"Tee P.", initials:"TP", org:"cakeable", program:"Cafe", phase:"Hired", status:"Cafe — Hired",
    statusColor:"badge-green", reader:true, employee:true, coach:"Meg",
    caregiver:"Aunt — text", caregiverPhone:"704-555-0173",
    placement:{ employer:"Cakeable Cafe", role:"Barista", schedule:"T,Th 9am-12