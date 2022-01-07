package entity

import (
	"time"
	"gorm.io/gorm"
)
type Gender struct {
	gorm.Model
	Identity string
}

type PatientType struct {
	gorm.Model
	typename string
}