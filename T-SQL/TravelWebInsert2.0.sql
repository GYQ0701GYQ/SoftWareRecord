INSERT INTO user_
VALUES('342501199907018220','RainChe','17801119872','rainchekey'),
	('410421199810200022','hl','15110200022','hl200022'),
	('342901199804304621','����','17801119881','jm981234')

INSERT INTO firm
VALUES('FakeЯ��','fakexiechengkey'),
	('Fake������','fakemafengwokey'),
	('Fake������','fakezhongqinglv')

INSERT INTO sight(sight_name,sight_loca,opentime,sight_photo,ticket_price,introduction)
VALUES('��ɽ','����-��ɽ','ƽ�����գ�06:30~16:30��������06:00~16:30','../../assets/st/yellowmount.jpg',190,'��ɽԭ������ɽ�����������ڣ�ң���������������˵��ԯ�Ƶ����ڴ��������ʸ���Ϊ����ɽ������ɽ���������С��ľ����١����ľ������ɡ���ʯ���ƺ�����Ȫ�����٣������١�����Ȫ�������١���ɽӭ�����ǰ������������Ѻõ�������������ӵ������Ķ��������Ļ���'),
	('����','�㽭-����','ȫ�쿪��:00:00-24:00','../../assets/st/westlake.jpg',0,'�����ϡ����������滷ɽ�����а׵̡��յ̡���̡��Թ��̽�����ָ������ˮ�档�����ĺ��������ʽ���Բ�Σ����ײ���Ϊƽ̹��������Ȼ�ر�ˮԴ�ǽ�ɳ��������������ɽ�������򽧣�������Ϫ����Ϫ����'),
	('�ʹ�','����-����','4.1-10.31:08:20-17:00;11.1-3.31:08:30-16:30','../../assets/st/palace.jpg',60,'�ʹ��ֳ��Ͻ��ǡ��й��Ŵ����������˺�һ���Ĺ滮��������ϵ��ǳ��붼�ǹ滮���Ӧ����ͻ����Ȩ�ĺϷ��Ժͻ�Ȩ�������ԡ���۾�ס����΢�������˼�ʵ���ڼΪ��������ġ����ӡ��������Ӧ������΢��������۶�Ӧ�������顷�ء�������΢�������ϵ�֮����Ҳ���������������Ϊ֮����')

INSERT INTO route(route_name,belong_firm,assignment,order_price,route_photo,contact_way,ceiling)
VALUES('ȫ����ɽ��.���������侰��.�����㹺��.��ɽ�����ճ�.������С��.��Խ������Ͽ��.��������','FakeЯ��','D1�����г���ǰ����ɽ����,ǰ����塢�Ϻ�����־�ã�D2��ɽ����_��ɽ�羰��,ǰ����ɽ�羰����������Ͽ�ȣ�D3��ɽ�羰��-��ܰ�ļ�,ǰ�����������ӹۺ�',1280,'../../assets/r/qjhsy.jpg','17856312209',40),
	('���ν���.ҹ������.��ת������դ��ҹ��.�������δ�.��������������.ס������Ӫ�����ջ.����һ��','Fake������','D1�����г���ǰ������ǰ��������դ��D2�������ݣ�ǰ������',779,'../../assets/r/myjn.jpg','13205687842',20),
	('����4��3��������.���������³�.������ʽ.������廪�򱱴�.��̳Բ��԰ͨƱ','Fake������','D1ǰ�����������ɻ��D2ǰ���찲�Ź㳡���ʹ�����Ժ����̳��D3������ʽ���˴��볤�ǣ����˹�԰',3044,'../../assets/r/bjsrswgty.jpg','15587459632',50)

INSERT INTO visit
VALUES(1,1),
	(2,2),
	(3,3)

INSERT INTO item
VALUES(1,'2019-07-22'),
	(1,'2019-08-01'),
	(1,'2019-08-07'),
	(2,'2019-07-19'),
	(2,'2019-08-02'),
	(2,'2019-08-10'),
	(3,'2019-07-12'),
	(3,'2019-07-24'),
	(3,'2019-08-03')

INSERT INTO order_
VALUES('342501199907018220',1,'2019-07-22'),
	('410421199810200022',2,'2019-07-19'),
	('342901199804304621',3,'2019-08-03')
