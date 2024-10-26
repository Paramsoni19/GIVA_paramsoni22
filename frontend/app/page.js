import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function Home() {
	const products = [
		{
			name: 'Necklace',
			description:
				'Elevate your style with our Acme Prism Tee, crafted from a premium blend of 60% combed ringspun cotton and 40% polyester for unparalleled comfort and durability.',
			price: '$99.99',
			quantity: '1'
		},
		{
			name: 'Nosepin',
			description:
				'Elevate your style with our Acme Prism Tee, crafted from a premium blend of 60% combed ringspun cotton and 40% polyester for unparalleled comfort and durability.',
			price: '$99.99',
			quantity: '1'
		},
		{
			name: 'Earrings',
			description:
				'Elevate your style with our Acme Prism Tee, crafted from a premium blend of 60% combed ringspun cotton and 40% polyester for unparalleled comfort and durability.',
			price: '$99.99',
			quantity: '1'
		},
		{
			name: 'Ring',
			description:
				'Elevate your style with our Acme Prism Tee, crafted from a premium blend of 60% combed ringspun cotton and 40% polyester for unparalleled comfort and durability.',
			price: '$99.99',
			quantity: '1'
		}
	];

	return (
		<div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
			<Dialog>
				<DialogTrigger asChild>
					<Button variant='outline'>Add New Product</Button>
				</DialogTrigger>
				<DialogContent className='sm:max-w-[425px]'>
					<DialogHeader>
						<DialogTitle>Add New Product</DialogTitle>
						<DialogDescription>
							Make changes to your profile here. Click save when
							you're done.
						</DialogDescription>
					</DialogHeader>
					<div className='grid gap-4 py-4'>
						<div className='grid grid-cols-4 items-center gap-4'>
							<Label htmlFor='name' className='text-right'>
								Name
							</Label>
							<Input id='name' className='col-span-3' />
						</div>
						<div className='grid grid-cols-4 items-center gap-4'>
							<Label htmlFor='description' className='text-right'>
								Description
							</Label>
							<Textarea
								id='description'
								className='col-span-3'
								placeholder='Type your message here.'
							/>
						</div>

						<div className='grid grid-cols-4 items-center gap-4'>
							<Label htmlFor='price' className='text-right'>
								Price
							</Label>
							<Input id='price' className='col-span-3' />
						</div>
						<div className='grid grid-cols-4 items-center gap-4'>
							<Label htmlFor='quantity' className='text-right'>
								Quantity
							</Label>
							<Input id='quantity' className='col-span-3' />
						</div>
					</div>
					<DialogFooter>
						<Button type='submit'>Save changes</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
			<main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
				<div className='grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6'>
					{products.map((product, index) => (
						<div
							className='relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2'
							key={index}
						>
							<Link
								href='#'
								className='absolute inset-0 z-10'
								prefetch={false}
							>
								<span className='sr-only'>View Product</span>
							</Link>

							<div className='bg-white p-4 dark:bg-gray-950'>
								<h2 className='font-bold text-xl'>
									{product.name} ({product.quantity})
								</h2>
								<h3 className='font-bold text-md text-gray-500'>
									{product.price}
								</h3>
								<p className='text-sm text-gray-500 dark:text-gray-400 line-clamp-2'>
									{product.description}
								</p>
								<div className='flex items-center justify-between mt-4'>
									<Button size='sm'>Edit</Button>
									<Button size='sm' variant='outline'>
										Delete
									</Button>
								</div>
							</div>
						</div>
					))}
				</div>
			</main>
		</div>
	);
}
