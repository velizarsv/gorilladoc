import MiddleSection from '@/components/MddleSection';
import MiddleSections from '@/components/MiddleSections';
import { title } from '@/components/primitives';
import useFetchDataAxios from '@/hooks/useFetchDataAxios';
import DefaultLayout from '@/layouts/default';
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Divider,
	Link
} from '@heroui/react';

export default function DocsPage() {
	const { data } = useFetchDataAxios('http://localhost:5000/todos');
	return (
		<>
			<DefaultLayout>
				<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
					<div className="inline-block max-w-lg text-center justify-center">
						<h1 className={title()}>Docs</h1>
					</div>
				</section>
				<section className="py-20 bg-blue-100">
					<div className="container mx-auto flex flex-row flex-wrap justify-left gap-2">
						{data?.map((todo: any) => (
							<Card className="max-w-[400px]" key={todo.id}>
								<CardHeader className="flex gap-3">
									<div className="flex flex-col">
										<p className="text-md">todo.title</p>
									</div>
								</CardHeader>
								<Divider />
								<CardBody>
									<p>todo.body</p>
								</CardBody>
								<Divider />
								<CardFooter>
									<Link
										isExternal
										showAnchorIcon
										href="https://github.com/heroui-inc/heroui"
									>
										Visit source code on GitHub.
									</Link>
								</CardFooter>
							</Card>
						))}
					</div>
				</section>
				<MiddleSection />
				<MiddleSections />
			</DefaultLayout>
		</>
	);
}
