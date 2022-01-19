package entity

import (
	"time"

	"gorm.io/gorm"
)
type Gender struct {
	gorm.Model
	Identity string
	Patient []Patient `gorm:"foreignKey:GenderID"`
}

type PatientRight struct {
	gorm.Model
	Name 		string
	Discount	uint
	Patient		[]Patient	`gorm:"foreignKey:PatientRightID"`
}


type PatientType struct {
	gorm.Model
	Typename string
	Patient []Patient `gorm:"foreignKey:PatientTypeID"`
}

type User struct {
	gorm.Model
	Name string
	Email string
	Password string
	//Role string
}

type Patient struct {
	
	gorm.Model
	HN   string 
	Pid   string 
	FirstName string
	LastName  string
	Birthdate time.Time
	Age       uint
	DateAdmit time.Time
	Symptom  string

	//GenderID ทำหน้าที่เป็น ForeignKey
	GenderID *uint
	Gender   Gender `gorm:"references:id"`

	//PatientTypeID ทำหน้าที่เป็น ForeignKey
	PatientTypeID *uint
	PatientType PatientType `gorm:"references:id"`
	

	//PatientRightID ทำหน้าที่เป็น ForeignKey
	PatientRightID 	*uint
	PatientRight   PatientRight `gorm:"references:id"`
}

