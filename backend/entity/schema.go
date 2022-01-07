package entity

import (
	"time"
	"gorm.io/gorm"
)
type Gender struct {
	gorm.Model
	Identity string
}