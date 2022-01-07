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

type PatientType struct {
	gorm.Model
	Typename string
	Patient []Patient `gorm:"foreignKey:PatientTypeID"`
}

type Patient struct {
	gorm.Model
	HN   string `gorm:"uniqueIndex"`
	Pid   string `gorm:"uniqueIndex"`
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
}

