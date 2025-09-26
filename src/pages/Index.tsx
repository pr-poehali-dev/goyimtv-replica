import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import Icon from '@/components/ui/icon'

function Index() {
  const [activeTab, setActiveTab] = useState('home')
  const [searchQuery, setSearchQuery] = useState('')

  const featuredVideos = [
    {
      id: 1,
      title: 'Технологии будущего 2024',
      channel: 'TechReview',
      views: '2.3M',
      duration: '15:42',
      thumbnail: 'https://v3.fal.media/files/lion/if7Nt2Vk8tiF5YIaXTSsw_output.png',
      isLive: false
    },
    {
      id: 2,
      title: 'ПРЯМОЙ ЭФИР: Обсуждаем новости',
      channel: 'NewsChannel',
      views: '15K',
      duration: 'LIVE',
      thumbnail: 'https://v3.fal.media/files/lion/if7Nt2Vk8tiF5YIaXTSsw_output.png',
      isLive: true
    },
    {
      id: 3,
      title: 'Обзор лучших приложений',
      channel: 'AppGuide',
      views: '856K',
      duration: '22:15',
      thumbnail: 'https://v3.fal.media/files/lion/if7Nt2Vk8tiF5YIaXTSsw_output.png',
      isLive: false
    },
    {
      id: 4,
      title: 'Кулинарное шоу: Итальянская кухня',
      channel: 'FoodMaster',
      views: '1.2M',
      duration: '18:33',
      thumbnail: 'https://v3.fal.media/files/lion/if7Nt2Vk8tiF5YIaXTSsw_output.png',
      isLive: false
    },
    {
      id: 5,
      title: 'LIVE: Игровой стрим',
      channel: 'GameStream',
      views: '8.5K',
      duration: 'LIVE',
      thumbnail: 'https://v3.fal.media/files/lion/if7Nt2Vk8tiF5YIaXTSsw_output.png',
      isLive: true
    },
    {
      id: 6,
      title: 'Музыкальная подборка 2024',
      channel: 'MusicHub',
      views: '445K',
      duration: '45:22',
      thumbnail: 'https://v3.fal.media/files/lion/if7Nt2Vk8tiF5YIaXTSsw_output.png',
      isLive: false
    }
  ]

  const categories = [
    'Все', 'Технологии', 'Игры', 'Музыка', 'Образование', 'Спорт', 'Новости', 'Развлечения'
  ]

  const VideoCard = ({ video }: { video: any }) => (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
      <div className="relative">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white px-2 py-1 rounded text-xs">
          {video.isLive ? (
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              LIVE
            </div>
          ) : (
            video.duration
          )}
        </div>
        {video.isLive && (
          <Badge className="absolute top-2 left-2 bg-red-500 text-white">
            <Icon name="Radio" size={12} className="mr-1" />
            В ЭФИРЕ
          </Badge>
        )}
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-base line-clamp-2 group-hover:text-primary transition-colors">
          {video.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Avatar className="w-6 h-6">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>{video.channel[0]}</AvatarFallback>
            </Avatar>
            <span>{video.channel}</span>
          </div>
          <span>{video.views} просмотров</span>
        </div>
      </CardContent>
    </Card>
  )

  const Header = () => (
    <header className="sticky top-0 z-50 bg-background border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                <Icon name="Play" size={20} className="text-white" />
              </div>
              <h1 className="text-xl font-bold">VideoHub</h1>
            </div>
          </div>
          
          <div className="flex-1 max-w-2xl mx-6">
            <div className="relative">
              <Input
                placeholder="Поиск видео..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-4 pr-12 h-10"
              />
              <Button size="sm" className="absolute right-1 top-1 h-8 w-8 p-0">
                <Icon name="Search" size={16} />
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Icon name="Upload" size={16} className="mr-2" />
              Загрузить
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>ПК</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  )

  const HomePage = () => (
    <div className="space-y-6">
      <div className="flex gap-3 overflow-x-auto pb-2">
        {categories.map((category, index) => (
          <Button 
            key={category}
            variant={index === 0 ? "default" : "outline"}
            size="sm"
            className="whitespace-nowrap"
          >
            {category}
          </Button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {featuredVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  )

  const ProfilePage = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-start gap-4">
            <Avatar className="w-24 h-24">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="text-2xl">ПК</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <CardTitle className="text-2xl">Пользователь Каналов</CardTitle>
              <CardDescription className="text-lg">245K подписчиков • 89 видео</CardDescription>
              <div className="flex gap-4 mt-4">
                <Button>Подписаться</Button>
                <Button variant="outline">Сообщение</Button>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Добро пожаловать на мой канал! Здесь я делюсь интересными видео о технологиях, 
            обзорах и образовательном контенте.
          </p>
          <Separator className="my-4" />
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold">245K</div>
              <div className="text-sm text-muted-foreground">Подписчиков</div>
            </div>
            <div>
              <div className="text-2xl font-bold">89</div>
              <div className="text-sm text-muted-foreground">Видео</div>
            </div>
            <div>
              <div className="text-2xl font-bold">15.2M</div>
              <div className="text-sm text-muted-foreground">Просмотров</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div>
        <h3 className="text-xl font-semibold mb-4">Мои видео</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredVideos.slice(0, 4).map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </div>
  )

  const SearchPage = () => (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <Input
            placeholder="Поиск видео..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1"
          />
          <Button>
            <Icon name="Search" size={16} className="mr-2" />
            Найти
          </Button>
        </div>
        
        <div className="flex gap-2 flex-wrap">
          <Button size="sm" variant="outline">
            <Icon name="Calendar" size={14} className="mr-2" />
            Дата
          </Button>
          <Button size="sm" variant="outline">
            <Icon name="Clock" size={14} className="mr-2" />
            Длительность
          </Button>
          <Button size="sm" variant="outline">
            <Icon name="Filter" size={14} className="mr-2" />
            Фильтры
          </Button>
        </div>
      </div>

      {searchQuery ? (
        <div>
          <p className="text-muted-foreground mb-4">
            Результаты поиска для "{searchQuery}"
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredVideos.filter(video => 
              video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              video.channel.toLowerCase().includes(searchQuery.toLowerCase())
            ).map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <Icon name="Search" size={64} className="mx-auto text-muted-foreground mb-4" />
          <h3 className="text-xl font-semibold mb-2">Начните поиск</h3>
          <p className="text-muted-foreground">Введите запрос для поиска видео</p>
        </div>
      )}
    </div>
  )

  const CategoriesPage = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Категории</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.slice(1).map((category) => (
          <Card key={category} className="hover:shadow-lg transition-shadow cursor-pointer group">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="Play" size={32} className="text-white" />
              </div>
              <h3 className="font-semibold">{category}</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {Math.floor(Math.random() * 1000) + 100} видео
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Популярное в категориях</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="home" className="flex items-center gap-2">
              <Icon name="Home" size={16} />
              Главная
            </TabsTrigger>
            <TabsTrigger value="search" className="flex items-center gap-2">
              <Icon name="Search" size={16} />
              Поиск
            </TabsTrigger>
            <TabsTrigger value="categories" className="flex items-center gap-2">
              <Icon name="Grid3x3" size={16} />
              Категории
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <Icon name="User" size={16} />
              Профиль
            </TabsTrigger>
          </TabsList>

          <TabsContent value="home" className="mt-0">
            <HomePage />
          </TabsContent>

          <TabsContent value="search" className="mt-0">
            <SearchPage />
          </TabsContent>

          <TabsContent value="categories" className="mt-0">
            <CategoriesPage />
          </TabsContent>

          <TabsContent value="profile" className="mt-0">
            <ProfilePage />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

export default Index