package entity

import (
	"time"

	"gorm.io/gorm"

	"github.com/asaskevich/govalidator"
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

type Patient struct {
	
	gorm.Model
	HN        string `valid:"matches(^HN\\d{6}$),required~HN cannot be blank"`
	Pid       string `valid:"matches(^[1-9]\\d{12}$),required~Identification Number cannot be blank"`
	FirstName string `valid:"required~FirstName cannot be blank"`
	LastName  string `valid:"required~LastName cannot be blank"`
	Birthdate time.Time `valid:"past~Birthdate must be in the past"`
	Age       uint `valid:"range(0|120)"`
	DateAdmit time.Time
	Symptom   string

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

type Employee struct {
	gorm.Model
	Name string
	Email string
	Password string

	//RoleID ทำหน้าที่เป็น ForeignKey
	RoleID *uint
	Role Role `gorm:"references:id"`
}

type Role struct {
	gorm.Model
	Position string
	Employee []Employee `gorm:"foreignKey:RoleID"`
}

func init() {
	govalidator.CustomTypeTagMap.Set("past", func(i interface{}, context interface{}) bool {
		t := i.(time.Time)
		return t.Before(time.Now())
	})

	govalidator.CustomTypeTagMap.Set("future", func(i interface{}, context interface{}) bool {
		t := i.(time.Time)
		return t.After(time.Now())
	})

	govalidator.CustomTypeTagMap.Set("Now", func(i interface{}, context interface{}) bool {
		t := i.(time.Time)
		return t.Equal(time.Now())
	})
}
