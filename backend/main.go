package main

import (
	"github.com/gin-gonic/gin"
	"github.com/phu024/prototype-se/controller"
	"github.com/phu024/prototype-se/entity"

)

func main() {
	entity.SetupDatabase()

	r := gin.Default()
	r.Use(CORSMiddleware())

	// patient Routes
	r.GET("/patients", controller.ListPatients)
	r.GET("/patient/:id", controller.GetPatient)
	r.POST("/patients", controller.CreatePatients)
	r.PATCH("/patients", controller.UpdatePatient)
	r.DELETE("/patients/:id", controller.DeletePatient)

	// patientType Routes
	r.GET("/patienttypes", controller.ListPatientTypes)
	r.GET("/patienttype/:id", controller.GetPatientType)

	// patientRight Routes
	r.GET("/patientrights", controller.ListPatientRights)
	r.GET("/patientright/:id", controller.GetPatientRight)

	// gender Routes
	r.GET("/genders", controller.ListGenders)
	r.GET("/gender/:id", controller.GetGender)


	// Run the server
	r.Run()
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}