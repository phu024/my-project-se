package main

import (
	"github.com/gin-gonic/gin"
	"github.com/phu024/prototype-se/controller"
	"github.com/phu024/prototype-se/entity"
	"github.com/phu024/prototype-se/middlewares"
)

func main() {
	entity.SetupDatabase()

	r := gin.Default()
	r.Use(CORSMiddleware())

	api := r.Group("")
	{
		protected := api.Use(middlewares.Authorizes())
		{
			// patient Routes
			protected.GET("/patients", controller.ListPatients)
			protected.GET("/patient/:id", controller.GetPatient)
			protected.POST("/patients", controller.CreatePatients)
			protected.PATCH("/patients", controller.UpdatePatient)
			protected.DELETE("/patients/:id", controller.DeletePatient)

			// patientType Routes
			protected.GET("/patienttypes", controller.ListPatientTypes)
			r.GET("/patienttype/:id", controller.GetPatientType)

			// patientRight Routes
			protected.GET("/patientrights", controller.ListPatientRights)
			r.GET("/patientright/:id", controller.GetPatientRight)

			// gender Routes
			protected.GET("/genders", controller.ListGenders)
			protected.GET("/gender/:id", controller.GetGender)

			// user Routes
			protected.GET("/users",controller.ListEmployees)
			protected.GET("/user/:id",controller.GetEmployee)
			//protected.POST("/users",controller.CreateUser)
			protected.PATCH("/users",controller.UpdateEmployee)
			protected.DELETE("/users/:id",controller.DeleteEmployee)

			// role Routes
			protected.GET("/roles",controller.ListRoles)
			protected.GET("/role/:id",controller.GetRole)
			
		}
	}
	// User Routes
	r.POST("/users", controller.CreateEmployee)

	// Authentication Routes
	r.POST("/login", controller.Login)
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
