export const demoUsers = [
  { id:"u-citizen", name:"Aarav Sharma", role:"citizen", phone:"+91 90000 00001", email:"citizen@demo.local", helperProfile:{enabled:true,category:"Medical",level:"First-Aid Certified",type:"First-Aid Trained",verified:"VERIFIED",availability:"AVAILABLE",responseStatus:"AVAILABLE"} },
  { id:"u-driver", name:"Rohan Verma", role:"driver", phone:"+91 90000 00002", email:"driver@demo.local" },
  { id:"u-dispatcher", name:"Nisha Kapoor", role:"dispatcher", phone:"+91 90000 00003", email:"dispatcher@demo.local" }
];
export const demoAmbulances = [
  { id:"RR-101", vehicle:"DL-01-ER-0707", driver:"Rohan Verma", status:"AVAILABLE", lat:28.617, lng:77.214, distanceKm:1.8, currentEmergencyId:null },
  { id:"RR-204", vehicle:"DL-01-ER-1212", driver:"Meera Singh", status:"EN ROUTE", lat:28.625, lng:77.202, distanceKm:3.4, currentEmergencyId:"ER-1024" },
  { id:"RR-307", vehicle:"DL-01-ER-1919", driver:"Kabir Khan", status:"BUSY", lat:28.606, lng:77.225, distanceKm:5.2, currentEmergencyId:"ER-1009" },
  { id:"RR-412", vehicle:"DL-01-ER-2222", driver:"Ishita Rao", status:"OFFLINE", lat:28.633, lng:77.19, distanceKm:7.1, currentEmergencyId:null }
];
export const demoHospitals = [
  { id:"H-01", name:"City Emergency Medical Center", address:"Central Delhi, Demo District", lat:28.619, lng:77.222, distanceKm:2.8, etaMin:8 },
  { id:"H-02", name:"Metro General Hospital", address:"South Demo Avenue", lat:28.597, lng:77.215, distanceKm:4.2, etaMin:12 },
  { id:"H-03", name:"Community Trauma Center", address:"North Demo Road", lat:28.638, lng:77.205, distanceKm:5.1, etaMin:15 }
];
export const demoHelpers = [
  { id:"u-citizen", name:"Aarav", type:"First-Aid Certified", distanceKm:.8, etaMin:3, availability:"AVAILABLE", verified:"VERIFIED", responseStatus:"AVAILABLE" },
  { id:"helper-2", name:"Vikram", type:"Volunteer", distanceKm:1.6, etaMin:5, availability:"AVAILABLE", verified:"VERIFIED", responseStatus:"AVAILABLE" }
];
export const demoEmergencies = [
  { id:"ER-1024", type:"Road Accident", details:"Two-wheeler collision; one person needs immediate assistance.", location:{lat:28.6139,lng:77.209,address:"Demo Ring Road Junction",accuracy:14}, priority:"RED",score:10,reasons:["Unconscious / unresponsive +5","Breathing difficulty +5"],status:"EN ROUTE",createdAt:Date.now()-134000,ambulanceId:"RR-204",helperId:"u-citizen",helperStatus:"ACCEPTED",hospitalId:"H-01",eta:4,events:[{label:"Reported",at:Date.now()-134000},{label:"Priority assessed",at:Date.now()-128000},{label:"Ambulance assigned",at:Date.now()-120000},{label:"Ambulance en route",at:Date.now()-60000},{label:"Helper accepted",at:Date.now()-45000}]},
  { id:"ER-1009", type:"Cardiac Emergency", details:"Emergency assistance requested.", location:{lat:28.606,lng:77.219,address:"Demo Market Road",accuracy:20}, priority:"YELLOW",score:4,reasons:["Chest-pain-like emergency +4"],status:"TRANSPORTING",createdAt:Date.now()-320000,ambulanceId:"RR-307",helperId:null,helperStatus:null,hospitalId:"H-02",eta:7,events:[{label:"Reported",at:Date.now()-320000},{label:"Priority assessed",at:Date.now()-310000},{label:"Ambulance assigned",at:Date.now()-290000},{label:"Ambulance arrived",at:Date.now()-180000},{label:"Transporting",at:Date.now()-120000}]}
];
