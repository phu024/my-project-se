package entity

import (
	"gorm.io/gorm"

	"time"

	"golang.org/x/crypto/bcrypt"
	"gorm.io/driver/sqlite"
)

var db *gorm.DB

func DB() *gorm.DB {
	return db
}

func SetupDatabase() {
	database, err := gorm.Open(sqlite.Open("SE64.db"), &gorm.Config{})

	if err != nil {
		panic("failed to connect database")
	}

	// Migrate the schema
	database.AutoMigrate(
		&Gender{},
		&PatientType{},
		&PatientRight{},
		&Patient{},
		&User{},
	)
	db = database

	password, err := bcrypt.GenerateFromPassword([]byte("123456"), 14)
	db.Model(&User{}).Create(&User{
		Name:     "Phuwason",
		Email:    "p@p.com",
		Password: string(password),
	})

	var Phuwadon User
	db.Raw("SELECT * FROM users WHERE email = ?", "p@p.com").Scan(&Phuwadon)

	// Gender Data (ข้อมูลเพศ)
	male := Gender{
		Identity: "ชาย",
	}
	db.Model(&Gender{}).Create(&male)
	female := Gender{
		Identity: "หญิง",
	}
	db.Model(&Gender{}).Create(&female)

	// PatientType Data
	t1 := PatientType{
		Typename: "ปกติ",
	}
	db.Model(&PatientType{}).Create(&t1)
	t2 := PatientType{
		Typename: "อุบัติเหตุ",
	}
	db.Model(&PatientType{}).Create(&t2)

	// PatientRight Data
	r1 := PatientRight{
		Name:     "สิทธิประกันสังคม",
		Discount: 0,
	}
	db.Model(&PatientRight{}).Create(&r1)
	r2 := PatientRight{
		Name:     "สิทธิประกันสังคมพิเศษ",
		Discount: 10,
	}
	db.Model(&PatientRight{}).Create(&r2)

	// Patient Data
	db.Model(&Patient{}).Create(&Patient{
		HN:           "HN001",
		Pid:          "PID001",
		FirstName:    "สมชาย",
		LastName:     "สมพงษ์",
		Birthdate:    time.Date(1996, time.January, 1, 0, 0, 0, 0, time.UTC),
		Age:          25,
		DateAdmit:    time.Date(2019, time.January, 1, 0, 0, 0, 0, time.UTC),
		Symptom:      "ปวดศีรษะ",
		Gender:       male,
		PatientType:  t1,
		PatientRight: r2,
	})
}
