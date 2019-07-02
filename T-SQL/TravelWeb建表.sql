----------------------------------------------------------创建user_表
CREATE TABLE user_
(
	id_num char(18) NOT NULL,
	user_name varchar(20) NOT NULL UNIQUE,
	telephone char(11) NOT NULL UNIQUE,
	user_key varchar(15) NOT NULL,
	PRIMARY KEY(id_num)	
)
-----------------------------------------------------------创建firm表
CREATE TABLE firm
(
	firm_name varchar(30) NOT NULL,
	firm_key varchar(15) NOT NULL,
	PRIMARY KEY(firm_name)
)
-----------------------------------------------------------创建sight表
CREATE TABLE sight
(
	sight_num int NOT NULL IDENTITY,
	sight_name varchar(20) NOT NULL UNIQUE,
	sight_loca varchar(24) DEFAULT '北京',
	opentime char(11) NOT NULL DEFAULT '00:00-24:00',
	ticket_price int NOT NULL CHECK(ticket_price>0 AND ticket_price<1000) DEFAULT 100,
	introduction varchar(1000) NOT NULL DEFAULT '尚无详细介绍',
	PRIMARY KEY(sight_num)
)
-----------------------------------------------------------创建route表
CREATE TABLE route
(
	route_num int NOT NULL IDENTITY,
	belong_firm varchar(30) NOT NULL,
	assignment varchar(2000) NOT NULL DEFAULT'暂无行程安排',
	order_price int NOT NULL DEFAULT 999,
	contact_way varchar(11) NOT NULL DEFAULT '12388889999',
	ceiling int NOT NULL CHECK(ceiling>0 AND ceiling<100) DEFAULT 36,
	PRIMARY KEY(route_num),
	FOREIGN KEY(belong_firm) REFERENCES firm(firm_name)
)
-----------------------------------------------------------创建visit表
CREATE TABLE visit
(
	v_routenum int NOT NULL ,
	v_sightnum int NOT NULL ,
	PRIMARY KEY(v_routenum,v_sightnum),
	FOREIGN KEY(v_routenum) REFERENCES route(route_num),
	FOREIGN KEY(v_sightnum) REFERENCES sight(sight_num)
)
-----------------------------------------------------------创建表item
CREATE TABLE item
(
	i_routenum int NOT NULL,
	starttime char(10) NOT NULL,
	PRIMARY KEY(i_routenum,starttime),
	FOREIGN KEY(i_routenum) REFERENCES route(route_num)
)
-----------------------------------------------------------创建表order
CREATE TABLE order_
(
	o_idnum char(18) NOT NULL,
	o_routenum int NOT NULL,
	o_starttime char(10) NOT NULL,
	PRIMARY KEY(o_idnum,o_routenum,o_starttime),
	FOREIGN KEY(o_idnum) REFERENCES user_(id_num),
	FOREIGN KEY(o_routenum) REFERENCES route(route_num),
	FOREIGN KEY(o_routenum,o_starttime) REFERENCES item(i_routenum,starttime)
)