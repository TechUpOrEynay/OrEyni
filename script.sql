USE [master]
GO
/****** Object:  Database [OrEnay]    Script Date: 31/08/2017 14:49:20 D:\SQLTichnut\MSSQL10_50.TICHNUT\MSSQL\DATA\OrEnay.mdf******/
CREATE DATABASE [OrEnay] ON  PRIMARY 
( NAME = N'OrEnay', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL13.MSSQLSERVER\MSSQL\DATA\OrEnay.mdf' , SIZE = 2304KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON      
( NAME = N'OrEnay_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL13.MSSQLSERVER\MSSQL\DATA\OrEnay_log.LDF' , SIZE = 576KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [OrEnay] SET COMPATIBILITY_LEVEL = 100
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [OrEnay].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [OrEnay] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [OrEnay] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [OrEnay] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [OrEnay] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [OrEnay] SET ARITHABORT OFF 
GO
ALTER DATABASE [OrEnay] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [OrEnay] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [OrEnay] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [OrEnay] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [OrEnay] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [OrEnay] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [OrEnay] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [OrEnay] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [OrEnay] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [OrEnay] SET  ENABLE_BROKER 
GO
ALTER DATABASE [OrEnay] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [OrEnay] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [OrEnay] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [OrEnay] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [OrEnay] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [OrEnay] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [OrEnay] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [OrEnay] SET RECOVERY FULL 
GO
ALTER DATABASE [OrEnay] SET  MULTI_USER 
GO
ALTER DATABASE [OrEnay] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [OrEnay] SET DB_CHAINING OFF 
GO
USE [OrEnay]
GO
/****** Object:  Table [dbo].[Activity]    Script Date: 31/08/2017 14:49:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Activity](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[description] [varchar](500) NULL,
	[ActivityDate] [datetime] NULL,
	[Adress] [varchar](30) NULL,
	[City] [int] NULL,
	[PlaceName] [varchar](50) NULL,
	[Cost] [float] NULL,
	[FreeCost] [bit] NULL,
	[MaxCount] [int] NULL,
	[IsShow] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ActivityImages]    Script Date: 31/08/2017 14:49:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ActivityImages](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[ActivityID] [int] NULL,
	[Image] [varchar](200) NULL,
	[Description] [varchar](200) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ActivityRegister]    Script Date: 31/08/2017 14:49:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ActivityRegister](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[ActivityID] [int] NULL,
	[ChildID] [int] NULL,
	[SumPay] [float] NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Child]    Script Date: 31/08/2017 14:49:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Child](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[FamilyChildID] [int] NULL,
	[FirstName] [varchar](25) NULL,
	[TZ] [varchar](25) NULL,
	[HMOID] [int] NULL,
	[SchoolID] [int] NULL,
	[ProblemID] [int] NULL,
	[Notes] [varchar](500) NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[City]    Script Date: 31/08/2017 14:49:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[City](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](25) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Donation]    Script Date: 31/08/2017 14:49:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Donation](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[DonorID] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Donor]    Script Date: 31/08/2017 14:49:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Donor](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [varchar](25) NULL,
	[LastName] [varchar](25) NULL,
	[FullAdress] [varchar](200) NULL,
	[Details] [varchar](200) NULL,
	[Phone] [varchar](25) NULL,
	[E_mail] [varchar](50) NULL,
	[IsActive] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DonorContact]    Script Date: 31/08/2017 14:49:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DonorContact](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[DonorID] [int] NULL,
	[Details] [varchar](25) NULL,
	[Date] [date] NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Family]    Script Date: 31/08/2017 14:49:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Family](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](25) NOT NULL,
	[Adress] [varchar](25) NULL,
	[Zip] [varchar](25) NULL,
	[CityID] [int] NULL,
	[Phone] [varchar](25) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FamilyChild]    Script Date: 31/08/2017 14:49:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FamilyChild](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FamilyId] [int] NULL,
	[FirstName] [varchar](20) NULL,
	[BirthDate] [date] NULL,
	[IsVisionImpaired] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[HMO]    Script Date: 31/08/2017 14:49:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[HMO](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](25) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MaritalStatus]    Script Date: 31/08/2017 14:49:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MaritalStatus](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Status] [varchar](25) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Parent]    Script Date: 31/08/2017 14:49:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Parent](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[FamilyID] [int] NULL,
	[FirstName] [varchar](25) NULL,
	[Occupation] [varchar](25) NULL,
	[IsMother] [bit] NULL,
	[Email] [varchar](65) NULL,
	[Phone] [varchar](25) NULL,
	[Notes] [varchar](500) NULL,
	[IsVisionImpaired] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Problem]    Script Date: 31/08/2017 14:49:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Problem](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](100) NULL,
	[Details] [varchar](500) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ProcessType]    Script Date: 31/08/2017 14:49:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProcessType](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Description] [varchar](30) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[School]    Script Date: 31/08/2017 14:49:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[School](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](25) NULL,
	[CityID] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 31/08/2017 14:49:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [varchar](25) NULL,
	[Password] [varchar](25) NULL,
	[IsAdmin] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Activity] ON 

INSERT [dbo].[Activity] ([ID], [description], [ActivityDate], [Adress], [City], [PlaceName], [Cost], [FreeCost], [MaxCount], [IsShow]) VALUES (3, N'פורים', CAST(N'2017-07-22T00:00:00.000' AS DateTime), N'יצחק ניסים 21', 2, N'מעלות', 25, 1, 100, 0)
INSERT [dbo].[Activity] ([ID], [description], [ActivityDate], [Adress], [City], [PlaceName], [Cost], [FreeCost], [MaxCount], [IsShow]) VALUES (4, N'בריכה', CAST(N'2017-07-23T00:00:00.000' AS DateTime), N'יצחק אלחנן', 3, N'שצרנסקי', 30, 0, 50, 0)
SET IDENTITY_INSERT [dbo].[Activity] OFF
SET IDENTITY_INSERT [dbo].[ActivityRegister] ON 

INSERT [dbo].[ActivityRegister] ([ID], [ActivityID], [ChildID], [SumPay]) VALUES (1, 3, 6, 30)
SET IDENTITY_INSERT [dbo].[ActivityRegister] OFF
SET IDENTITY_INSERT [dbo].[Child] ON 

INSERT [dbo].[Child] ([ID], [FamilyChildID], [FirstName], [TZ], [HMOID], [SchoolID], [ProblemID], [Notes]) VALUES (6, 1, N'tgka', N'206309478', 1, 2, 1, N'uct7dpld8')
SET IDENTITY_INSERT [dbo].[Child] OFF
SET IDENTITY_INSERT [dbo].[City] ON 

INSERT [dbo].[City] ([ID], [Name]) VALUES (1, N'בני ברק')
INSERT [dbo].[City] ([ID], [Name]) VALUES (2, N'ירושלים')
INSERT [dbo].[City] ([ID], [Name]) VALUES (3, N'מעלות')
INSERT [dbo].[City] ([ID], [Name]) VALUES (4, N'קרית ספר')
SET IDENTITY_INSERT [dbo].[City] OFF
SET IDENTITY_INSERT [dbo].[Family] ON 

INSERT [dbo].[Family] ([Id], [Name], [Adress], [Zip], [CityID], [Phone]) VALUES (1, N'סמסון', N'בן אברהם 5', N'8899', 1, N'03-5788947')
SET IDENTITY_INSERT [dbo].[Family] OFF
SET IDENTITY_INSERT [dbo].[FamilyChild] ON 

INSERT [dbo].[FamilyChild] ([Id], [FamilyId], [FirstName], [BirthDate], [IsVisionImpaired]) VALUES (1, 1, N'fJTE', CAST(N'2000-07-22' AS Date), 1)
SET IDENTITY_INSERT [dbo].[FamilyChild] OFF
SET IDENTITY_INSERT [dbo].[HMO] ON 

INSERT [dbo].[HMO] ([Id], [Name]) VALUES (1, N'DTJQ')
SET IDENTITY_INSERT [dbo].[HMO] OFF
SET IDENTITY_INSERT [dbo].[Parent] ON 

INSERT [dbo].[Parent] ([ID], [FamilyID], [FirstName], [Occupation], [IsMother], [Email], [Phone], [Notes], [IsVisionImpaired]) VALUES (3, 1, N'אסתר', N'גננת', 1, N'a@a.com', N'054-8899989', N'סובלת מלקות קלה בעין שמאל', NULL)
SET IDENTITY_INSERT [dbo].[Parent] OFF
SET IDENTITY_INSERT [dbo].[Problem] ON 

INSERT [dbo].[Problem] ([Id], [Name], [Details]) VALUES (1, N'HYFKAS64', N'FSJ')
SET IDENTITY_INSERT [dbo].[Problem] OFF
SET IDENTITY_INSERT [dbo].[School] ON 

INSERT [dbo].[School] ([Id], [Name], [CityID]) VALUES (2, N'GDMK', 1)
SET IDENTITY_INSERT [dbo].[School] OFF
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([Id], [UserName], [Password], [IsAdmin]) VALUES (1, N'חיים', N'1234', 1)
INSERT [dbo].[Users] ([Id], [UserName], [Password], [IsAdmin]) VALUES (2, N'משה', N'4321', 1)
SET IDENTITY_INSERT [dbo].[Users] OFF
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__FamilyCh__3214E4701ED998B2]    Script Date: 31/08/2017 14:49:20 ******/
ALTER TABLE [dbo].[Child] ADD UNIQUE NONCLUSTERED 
(
	[TZ] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Activity]  WITH CHECK ADD FOREIGN KEY([City])
REFERENCES [dbo].[City] ([ID])
GO
ALTER TABLE [dbo].[ActivityImages]  WITH CHECK ADD FOREIGN KEY([ActivityID])
REFERENCES [dbo].[Activity] ([ID])
GO
ALTER TABLE [dbo].[ActivityRegister]  WITH CHECK ADD FOREIGN KEY([ActivityID])
REFERENCES [dbo].[Activity] ([ID])
GO
ALTER TABLE [dbo].[ActivityRegister]  WITH CHECK ADD FOREIGN KEY([ChildID])
REFERENCES [dbo].[Child] ([ID])
GO
ALTER TABLE [dbo].[Child]  WITH CHECK ADD FOREIGN KEY([FamilyChildID])
REFERENCES [dbo].[Family] ([Id])
GO
ALTER TABLE [dbo].[Child]  WITH CHECK ADD FOREIGN KEY([HMOID])
REFERENCES [dbo].[HMO] ([Id])
GO
ALTER TABLE [dbo].[Child]  WITH CHECK ADD FOREIGN KEY([ProblemID])
REFERENCES [dbo].[Problem] ([Id])
GO
ALTER TABLE [dbo].[Child]  WITH CHECK ADD FOREIGN KEY([SchoolID])
REFERENCES [dbo].[School] ([Id])
GO
ALTER TABLE [dbo].[Donation]  WITH CHECK ADD FOREIGN KEY([DonorID])
REFERENCES [dbo].[Donor] ([ID])
GO
ALTER TABLE [dbo].[DonorContact]  WITH CHECK ADD FOREIGN KEY([DonorID])
REFERENCES [dbo].[Donor] ([ID])
GO
ALTER TABLE [dbo].[Family]  WITH CHECK ADD FOREIGN KEY([CityID])
REFERENCES [dbo].[City] ([ID])
GO
ALTER TABLE [dbo].[FamilyChild]  WITH CHECK ADD FOREIGN KEY([FamilyId])
REFERENCES [dbo].[Family] ([Id])
GO
ALTER TABLE [dbo].[Parent]  WITH CHECK ADD FOREIGN KEY([FamilyID])
REFERENCES [dbo].[Family] ([Id])
GO
ALTER TABLE [dbo].[School]  WITH CHECK ADD FOREIGN KEY([CityID])
REFERENCES [dbo].[City] ([ID])
GO
USE [master]
GO
ALTER DATABASE [OrEnay] SET  READ_WRITE 
GO
