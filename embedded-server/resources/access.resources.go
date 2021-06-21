package resources

type AccessRequest struct {
	UserIdCard 	int   	`json:"userIdCard,omitempty"`
	AreaCode  	string 	`json:"areaCode,omitempty"`
	AccessId 	string 	`json:"accessId,omitempty"`
	Access  	struct {
        InDateTime 		string 	`json:"inDateTime,omitempty"`
        OutDateTime 	string 	`json:"outDateTime,omitempty"` 
    } 	`json:"access"`
}

type Access struct {
	InDateTime 	string 	`json:"inDateTime,omitempty"`
	OutDateTime string 	`json:"outDateTime,omitempty"`
}

type AccessResponse struct {
	ID 			struct {
		Oid 		string 	`json:"$oid"`
	} 	`json:"_id"`
	Area 		struct {
		Oid 		string 	`json:"$oid"`
	} 	`json:"area"`
	InDateTime 	struct {
		Date 		int64 	`json:"$date"`
	} 	`json:"inDateTime"`
	User 		struct {
		Oid 		string 	`json:"$oid"`
	} 	`json:"user"`
}